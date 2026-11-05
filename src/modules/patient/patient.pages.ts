import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";
import { general_option_list_options_source } from "../../general-option-seeds.ts";

const API = "api://m/subject-control-hospitalario";

export const patient_pages: KirletPageDecl[] = [
  {
    id: "control-hospitalario.patient",
    path: "patient",
    permission: "subject.control-hospitalario.patient.read",
    build: () =>
      build_feature_shell_page({
        id: "control-hospitalario.patient",
        owner: "subject-control-hospitalario",
        title: "Pacientes",
        props: {
          basePath: "patient",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Pacientes",
            subtitle: "Submenú de control-hospitalario",
            pluralLabel: "pacientes",
            singularLabel: "pacientes",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/patient`,
            record: `${API}/patient/:id`,
            create: { method: "POST", action: `${API}/patient` },
            update: { method: "PATCH", action: `${API}/patient/:id` },
            delete: { method: "DELETE", action: `${API}/patient/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "numero_expediente", label: "numero expediente", sortable: true, priority: 3 },
              { key: "nombre_completo", label: "nombre completo", sortable: true, priority: 3 },
              { key: "fecha_nacimiento", label: "fecha nacimiento", sortable: true, priority: 3 },
              { key: "edad", label: "edad", sortable: true, priority: 3 },
              { key: "sexo", label: "sexo", sortable: true, priority: 3 },
              { key: "estado_civil", label: "estado civil", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              {
                name: "nombre_completo",
                component: "input-text",
                label: "Nombre",
                required: true,
              },
              {
                name: "numero_expediente",
                component: "input-text",
                label: "Número de expediente",
                required: false,
                read_only: true,
              },
              {
                name: "fecha_nacimiento",
                component: "input-date",
                label: "Fecha de nacimiento",
                required: true,
              },
              {
                name: "edad",
                component: "input-number",
                label: "Edad",
                required: true,
                min: 0,
                max: 150,
              },
              {
                name: "sexo",
                component: "input-menu",
                label: "Sexo",
                required: true,
                // Opciones: general-option-list-control (seed en general-option-seeds.ts).
                optionsSource: general_option_list_options_source(
                  "subject-control-hospitalario/patient",
                  "sexo",
                ),
              },
              {
                name: "estado_civil",
                component: "input-menu",
                label: "Estado civil",
                required: true,
                // Opciones: general-option-list-control (seed en general-option-seeds.ts).
                optionsSource: general_option_list_options_source(
                  "subject-control-hospitalario/patient",
                  "estado_civil",
                ),
              },
              { name: "ocupacion", component: "input-text", label: "Ocupación" },
              {
                name: "telefono_paciente",
                component: "input-mask",
                label: "Teléfono paciente",
                mask: "00 0000 0000",
              },
              {
                name: "domicilio_completo",
                component: "input-text",
                label: "Domicilio completo",
              },
              {
                name: "telefono_familiar",
                component: "input-mask",
                label: "Teléfono familiar",
                mask: "00 0000 0000",
              },
              { name: "grupo_etnico", component: "input-text", label: "Grupo étnico" },
              {
                name: "alergias_conocidas",
                component: "input-textarea",
                label: "Alergias conocidas",
              },
              { name: "adicciones", component: "input-textarea", label: "Adicciones" },
              { name: "name", component: "input-text", label: "Nombre (sistema)" },
              { name: "description", component: "input-textarea", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
            ],
          },
        },
      }),
  },
];
