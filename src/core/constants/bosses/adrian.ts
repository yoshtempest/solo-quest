import type { BossConfig } from "./types";
import { ADRIAN_MISSIONS } from "@/core/constants/missions/adrian";

export const ADRIAN: BossConfig = {
  id: "adrian",
  name: "Adrian",
  title: "o Persistente",
  image: "/src/assets/adrian.svg",
  missions: ADRIAN_MISSIONS
};