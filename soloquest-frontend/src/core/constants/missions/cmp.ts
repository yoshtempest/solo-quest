import type { BossMission } from "./types";
import { Ghost, MoveDiagonal, VolumeX } from "lucide-react";

export const CMP_MISSIONS: BossMission[] = [
  {
    id: 1,
    title: "Corpo que Desaparece",
    image: Ghost,
    total: 5,
    unit: "min",
    tasks: [
      "Agachamento profundo, mantendo os calcanhares no chão",
      "Alterne o peso do corpo lentamente entre os pés",
      "Mantenha o tronco ereto e a respiração silenciosa"
    ]
  },
  {
    id: 2,
    title: "Ângulo Morto",
    image: MoveDiagonal,
    total: 5,
    unit: "min",
    tasks: [
      "Avanço (lunge) profundo com o joelho traseiro próximo ao chão",
      "Alterne as pernas sem levantar o tronco",
      "Sinta o alongamento dos quadris e posteriores"
    ]
  },
  {
    id: 3,
    title: "Silêncio Antes do Golpe",
    image: VolumeX,
    total: 5,
    unit: "min",
    tasks: [
      "Alongamento lateral com pernas afastadas",
      "Desça o tronco lentamente em direção a uma perna",
      "Evite movimentos bruscos, controle total"
    ]
  }
];
