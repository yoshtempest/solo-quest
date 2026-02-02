import type { BossConfig } from "./types";
import { HERMES_MISSIONS } from "@/core/constants/missions/hermes";

export const HERMES: BossConfig = {
  id: "hermes",
  name: "Hermes",
  title: "o Mensageiro",
  image: "/src/assets/hermes.svg",
  missions: HERMES_MISSIONS
};