import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const medical_tables: KirletTableDecl[] = [
  {
    name: "medical",
    columns: [
      { name: "id", type: "text", primaryKey: true },
      { name: "name", type: "text", notNull: true },
      { name: "description", type: "text" },
      { name: "is_active", type: "boolean", notNull: true, default: true },
      { name: "state", type: "text" },
      { name: "ref", type: "text", unique: true },
      { name: "search_field", type: "text" },
      { name: "created_by", type: "text" },
      { name: "custom_data", type: "json" },
      { name: "payload", type: "json" },
      { name: "created_at", type: "text", notNull: true },
      { name: "updated_at", type: "text", notNull: true },
      { name: "nombre_completo", type: "text" },
      { name: "cedula_profesional", type: "text" },
      { name: "especialidad", type: "text" },
      { name: "firma_digital", type: "text" },
      { name: "sello_medico", type: "text" },
    ],
    indexes: [
      { name: "idx_medical_name", columns: ["name"] },
      { name: "idx_medical_active", columns: ["is_active"] },
    ],
  },
];
