import { MUSASHI } from "./musashi";
import { LEONIDAS } from "./leonidas";
import { HERMES } from "./hermes";
import { ADRIAN } from "./adrian";
import type { BossConfig } from "./types";

export const DAILY_BOSSES: Record<number, BossConfig> = {
  3: MUSASHI,  // domingo
  1: LEONIDAS, // segunda
  2: HERMES,   // terça
  0: ADRIAN,
  // 3,4,5,6 → futuros bosses
};
