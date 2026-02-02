import type { BossConfig } from "./types";
import { CMP_MISSIONS } from "@/core/constants/missions/cmp";

export const CMP: BossConfig = {
  id: "cmp",
  name: "CMP",
  title: "a Morte Branca",
  image: "/src/assets/cmp.svg",
  missions: CMP_MISSIONS
};