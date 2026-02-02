import type { BossMission } from "./types";
import { Plus, Pause, Repeat } from "lucide-react";

export const ADRIAN_MISSIONS: BossMission[] = [
  {
    id: 1,
    title: "Um a Mais",
    image: Plus,
    total: 50,
    unit: "rep",
    tasks: [
      "Flexão tradicional",
      "Se precisar, faça pausas curtas sem deitar no chão",
      "Quando quiser parar, faça mais uma repetição"
    ]
  },
  {
    id: 2,
    title: "Segura a Posição",
    image: Pause,
    total: 50,
    unit: "rep",
    tasks: [
      "Barra tradicional",
      "Descanse pendurado na barra, sem soltar",
      "Controle a descida mesmo quando os braços cansarem"
    ]
  },
  {
    id: 3,
    title: "Não Quebre o Ritmo",
    image: Repeat,
    total: 50,
    unit: "rep",
    tasks: [
      "Dip tradicional",
      "Mantenha um ritmo constante, sem pressa",
      "Se falhar, descanse poucos segundos e continue"
    ]
  }
];
