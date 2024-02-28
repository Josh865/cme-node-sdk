import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.{ts,tsx}"],
  dts: true,
  bundle: false,
  clean: true,
  format: ["esm", "cjs"],
});
