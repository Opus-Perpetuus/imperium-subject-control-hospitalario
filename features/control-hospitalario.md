# Control Hospitalario

Quien usa la app ve el menú "Control Hospitalario" con Expediente clínico,
Médicos, Pacientes y Kiosco Expediente Clínico. Queda probado que la app
responde sana y publica esas cuatro páginas en su manifiesto.

## Sub-features

La app hace la acción de `paginas`. Escribe: no. Esta ficha no lleva línea
`Subject:` con imagen: el catálogo no da un tag para rellenarla. El hueco
está en `despliegue.md` del monorepo.

- `salud` responde `GET /health` 200 con `status: "ok"`, `ready: true` y
  `service: "subject-control-hospitalario"`.
- `paginas` responde `GET /pages` 200 con `data` que contiene los ids
  `control-hospitalario.medical-file`, `control-hospitalario.kiosk`,
  `control-hospitalario.medical` y `control-hospitalario.patient`.

### Archivos y contratos

- `src/subject.ts` — `define_subject` de `subject-control-hospitalario`; no
  declara `dependsOn`.
- `src/modules/*/*.routes.ts` — módulos `medical-file`, `kiosk`, `medical` y
  `patient`.
- `GET /health`, `GET /manifest` y `GET /pages` del kit
  (`vendor/kit/src/kirlet/serve.ts`).

### Mapa

| id | ruta | rol semilla | pasos | esperado | muta | receta |
| --- | --- | --- | --- | --- | --- | --- |
| `subject-control-hospitalario.salud` | `/health` | ninguno | GET a la app en `:3204` | HTTP 200, `service: "subject-control-hospitalario"` | no | sin receta |
| `subject-control-hospitalario.paginas` | `/pages` | ninguno | GET a la app en `:3204` | HTTP 200, los cuatro ids de página | no | sin receta |

## How to get to it (user POV)

- Menú "Control Hospitalario" → Expediente clínico (`medical-file`), Médicos
  (`medical`), Pacientes (`patient`), Kiosco Expediente Clínico (`kiosk`).

## Driving it with arnes

Preconditions:

- Doctor en 0. Si falta `subject-control-hospitalario`, la receta sale
  `omitida`.

- **Abrir.** `GET /health` y `GET /pages` en `http://127.0.0.1:3204`; el
  resultado es el de las sub-features `salud` y `paginas`.
- **Proof.** `evidence/control-hospitalario/`.

## Gotchas

- Una receta de lectura que escribe sale en fallo aunque la pantalla se vea bien.
- Sin base QA nombrada en esta ficha no corre ninguna receta que muta.
- `omitida` no cuenta como probada.
