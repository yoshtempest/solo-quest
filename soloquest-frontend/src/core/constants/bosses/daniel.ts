import type { BossConfig } from "./types";
import { DANIEL_MISSIONS } from "@/core/constants/missions/daniel";

export const DANIEL: BossConfig = {
  id: "daniel",
  name: "Daniel",
  title: "o Impecável",
  image: "/src/assets/daniel.svg",
  missions: DANIEL_MISSIONS
};