export function isEnvProduction() {
  return process.env.NODE_ENV === "production";
}

export function isEnvDevelopment() {
  return !isEnvProduction();
}

export const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== "false";
