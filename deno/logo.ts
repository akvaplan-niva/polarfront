import { encodeBase64 } from "std/encoding/base64.ts";
export const logo400WBase64 = encodeBase64(
  await Deno.readFile("logo/polarfront_400w.png"),
);
