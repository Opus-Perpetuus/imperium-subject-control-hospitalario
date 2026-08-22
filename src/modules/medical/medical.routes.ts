import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { medical_pages } from "./medical.pages.ts";
import { medical_tables } from "./medical.tables.ts";

export const medical_module = define_module({
  resource: "medical",
  labels: {
    singular: "Médicos",
    plural: "Médicos",
    read: "Ver Médicos",
    write: "Editar Médicos",
  },
  routes: define_crud({
    resource: "medical",
    table: "medical",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "medical",
    fields: {
      name: { type: "string", required: true, search: true },
      description: { type: "string", search: true },
      is_active: { type: "boolean" },
      state: { type: "string" },
      ref: { type: "string", search: true },
      search_field: { type: "string", search: true },
      created_by: { type: "string" },
      custom_data: { type: "json" },
      payload: { type: "json" },
      nombre_completo: { type: "string", search: true },
      cedula_profesional: { type: "string", search: true },
      especialidad: { type: "string", search: true },
      firma_digital: { type: "string", search: true },
      sello_medico: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: medical_tables,
  pages: medical_pages,
  menu: [],
});
