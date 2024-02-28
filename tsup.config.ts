import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  dts: true,
  bundle: false,
  treeshake: true,
  target: "node18",
  clean: true,
  format: ["esm", "cjs"],
});
