import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const patient_tables: KirletTableDecl[] = [
  {
    name: "patient",
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
      { name: "numero_expediente", type: "text" },
      { name: "nombre_completo", type: "text" },
      { name: "fecha_nacimiento", type: "text" },
      { name: "edad", type: "real" },
      { name: "sexo", type: "text" },
      { name: "estado_civil", type: "text" },
      { name: "ocupacion", type: "text" },
      { name: "telefono_paciente", type: "text" },
      { name: "domicilio_completo", type: "text" },
      { name: "telefono_familiar", type: "text" },
      { name: "grupo_etnico", type: "text" },
      { name: "alergias_conocidas", type: "text" },
      { name: "adicciones", type: "text" },
    ],
    indexes: [
      { name: "idx_patient_name", columns: ["name"] },
      { name: "idx_patient_active", columns: ["is_active"] },
    ],
  },
];
