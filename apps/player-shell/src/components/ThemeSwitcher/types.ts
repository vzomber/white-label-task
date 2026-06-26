export const Theme = {
  DEFAULT: "default",
  ALPHA: "alpha",
} as const;

export type ThemeType = (typeof Theme)[keyof typeof Theme];
