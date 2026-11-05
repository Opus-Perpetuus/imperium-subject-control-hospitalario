import type { KirletDataClient, NoxServices } from "@opus-perpetuus/imperium-core-kit";
import { new_id, now_iso } from "@opus-perpetuus/imperium-core-kit";
import { push_general_option_seeds } from "./general-option-seeds.ts";

export async function seed_demo(ctx: {
  data: KirletDataClient;
  nox: NoxServices;
  technical_id: string;
}): Promise<void> {
  void push_general_option_seeds().then((r) =>
    console.log(JSON.stringify({ scope: "seed", msg: "general_option_seeds", ...r, data: undefined })),
  );

  const n = await ctx.data.count("medical_file");
  if (n > 0) return;
  const ts = now_iso();
  await ctx.data.insert("medical_file", {
    id: new_id("medical-"),
    name: "Expediente clínico (ejemplo)",
    description: "Registro semilla de la app. Sustituye al migrar desde Mongo.",
    is_active: true,
    ref: "seed-control-hospitalario",
    created_at: ts,
    updated_at: ts,
  });
}
