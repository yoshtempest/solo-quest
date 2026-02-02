import type { BossConfig } from "./types";
import { BRUCE_MISSIONS } from "@/core/constants/missions/bruce";

export const BRUCE: BossConfig = {
  id: "bruce",
  name: "Bruce",
  title: "a Lenda",
  image: "/src/assets/bruce.svg",
  missions: BRUCE_MISSIONS
};