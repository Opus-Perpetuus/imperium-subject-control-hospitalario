import { define_subject } from "@opus-perpetuus/imperium-core-kit";
import pkg from "../package.json" with { type: "json" };
import { medical_file_module } from "./modules/medical-file/medical-file.routes.ts";
import { kiosk_module } from "./modules/kiosk/kiosk.routes.ts";
import { medical_module } from "./modules/medical/medical.routes.ts";
import { patient_module } from "./modules/patient/patient.routes.ts";
import { seed_demo } from "./seed.ts";

export const SUBJECT = define_subject({
  id: "SUBJECT-control-hospitalario",
  name: "Control Hospitalario",
  version: pkg.version,
  image: `ghcr.io/opus-perpetuus/subject-control-hospitalario:${pkg.version}`,
  compat: { nox: ">=0.5.0", kit: "^0.5.0" },
  schema_version: 1,
  menu_root: {
    id: "control-hospitalario.root",
    label: "Control Hospitalario",
    order: 0,
  },
  modules: [medical_file_module, kiosk_module, medical_module, patient_module],
  seed: seed_demo,
});

export const KIRLET = SUBJECT;
