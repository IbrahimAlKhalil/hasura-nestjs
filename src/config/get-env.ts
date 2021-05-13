export function getEnv(name: string, _default?: string): string {
  const value = process.env[name];

  if (!value) {
    if (_default === undefined) {
      throw new Error(`Environment variable "${name}" is required`);
    }

    return _default;
  }

  return value;
}

export function getEnvNum(name: string, _default?: number): number {
  const value = process.env[name];

  if (!value) {
    if (!_default) {
      throw new Error(`Environment variable "${name}" is required`);
    }

    return _default;
  }

  const coerced = Number(value);

  if (isNaN(coerced)) {
    throw new Error(`Value "${value}" in environment variable "${name}" cannot be coerced to a number`);
  }

  return coerced;
}