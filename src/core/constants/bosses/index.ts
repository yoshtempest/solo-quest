import { MUSASHI } from "./musashi";
import { LEONIDAS } from "./leonidas";
import { HERMES } from "./hermes";
import { ADRIAN } from "./adrian";
import { CMP } from "./cmp";
import { DANIEL } from "./daniel";
import { BRUCE } from "./bruce";
import type { BossConfig } from "./types";

export const DAILY_BOSSES: Record<number, BossConfig> = {
  0: MUSASHI,  // domingo
  1: LEONIDAS, // segunda
  2: HERMES,   // terça
  3: ADRIAN,
  4: CMP,
  5: DANIEL,
  6: BRUCE,
};
