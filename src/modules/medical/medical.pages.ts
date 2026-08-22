import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-control-hospitalario";

export const medical_pages: KirletPageDecl[] = [
  {
    id: "control-hospitalario.medical",
    path: "medical",
    permission: "subject.control-hospitalario.medical.read",
    build: () =>
      build_feature_shell_page({
        id: "control-hospitalario.medical",
        owner: "subject-control-hospitalario",
        title: "Médicos",
        props: {
          basePath: "medical",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Médicos",
            subtitle: "Submenú de control-hospitalario",
            pluralLabel: "médicos",
            singularLabel: "médicos",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/medical`,
            record: `${API}/medical/:id`,
            create: { method: "POST", action: `${API}/medical` },
            update: { method: "PATCH", action: `${API}/medical/:id` },
            delete: { method: "DELETE", action: `${API}/medical/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "nombre_completo", label: "nombre completo", sortable: true, priority: 3 },
              { key: "cedula_profesional", label: "cedula profesional", sortable: true, priority: 3 },
              { key: "especialidad", label: "especialidad", sortable: true, priority: 3 },
              { key: "firma_digital", label: "firma digital", sortable: true, priority: 3 },
              { key: "sello_medico", label: "sello medico", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "nombre_completo", component: "input-text", label: "nombre completo" },
              { name: "cedula_profesional", component: "input-text", label: "cedula profesional" },
              { name: "especialidad", component: "input-text", label: "especialidad" },
              { name: "firma_digital", component: "input-text", label: "firma digital" },
              { name: "sello_medico", component: "input-text", label: "sello medico" },
            ],
          },
        },
      }),
  },
];
