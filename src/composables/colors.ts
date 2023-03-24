export const useColors = () => {
  // Data

  const colors = [
    "acento-principal",
    "acento-principal-hover",
    "acento-principal-pressed",
    "acento-secundario",
    "acento-secundario-hover",
    "acento-secundario-pressed",
    "secundario",
    "neutro-1",
    "neutro-2",
    "neutro-3",
    "neutro-4",
    "background",
    "complementario-1",
    "complementario-2",
    "complementario-3",
    "error",
    "error-hover",
    "error-pressed",
  ];

  // Methods

  const isCustom = (name: string) => colors.includes(name);

  const getRealColor = (name: string) => {
    if (isCustom(name)) return `rgb(var(--${name}))`;
    return name;
  };

  return {
    // Methods
    isCustom,
    getRealColor
  };
};
