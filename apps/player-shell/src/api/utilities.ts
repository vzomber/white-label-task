const DELAY_TIME = Number(import.meta.env.VITE_DELAY ?? 500);

export const delay = (ms = DELAY_TIME) =>
  new Promise((resolve) => setTimeout(resolve, ms));
