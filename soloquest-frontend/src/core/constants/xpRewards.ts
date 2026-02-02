import type { Difficulty } from "@/core/constants/difficulty";

export const BOSS_XP_REWARD: Record<Difficulty, number> = {
  "Fácil": 50,
  "Médio": 100,
  "Difícil": 200,
  "Insano": 350,
  "Impossível": 500,
};