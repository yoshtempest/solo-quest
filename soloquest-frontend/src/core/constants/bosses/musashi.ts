import type { BossConfig } from "./types";
import { MUSASHI_MISSIONS } from "@/core/constants/missions/musashi";

export const MUSASHI: BossConfig = {
  id: "musashi",
  name: "Musashi",
  title: "o Calmo",
  image: "/src/assets/musashi.svg",
  missions: MUSASHI_MISSIONS
};
