import type { KirletDataClient, NoxServices } from "@opus-perpetuus/imperium-core-kit";
import { new_id, now_iso } from "@opus-perpetuus/imperium-core-kit";

export async function seed_demo(ctx: {
  data: KirletDataClient;
  nox: NoxServices;
  technical_id: string;
}): Promise<void> {
  const n = await ctx.data.count("medical_file");
  if (n > 0) return;
  const ts = now_iso();
  await ctx.data.insert("medical_file", {
    id: new_id("medical-"),
    name: "Expediente clínico (ejemplo)",
    description: "Registro semilla del súbdito. Sustituye al migrar desde Mongo.",
    is_active: true,
    ref: "seed-control-hospitalario",
    created_at: ts,
    updated_at: ts,
  });
}
