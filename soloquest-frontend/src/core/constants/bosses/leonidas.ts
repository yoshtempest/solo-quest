import type { BossConfig } from "./types";
import { LEONIDAS_MISSIONS } from "@/core/constants/missions/leonidas";

export const LEONIDAS: BossConfig = {
  id: "leonidas",
  name: "Leônidas",
  title: "o Guerreiro",
  image: "/src/assets/leonidas.svg",
  missions: LEONIDAS_MISSIONS
};
