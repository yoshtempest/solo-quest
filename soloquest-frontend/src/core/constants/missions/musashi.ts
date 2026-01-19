import type { BossMission } from "./types";

export const MUSASHI_MISSIONS: BossMission[] = [
  {
    id: 1,
    title: "Calmo como o Mar",
    image: "pushUp2",
    total: 10,
    unit: "min",
    tasks: [
      "Inspire em 4s, segure 4s e expire em 4s",
      "Mantenha os ombros e a mandíbula relaxados",
      "Se a mente divagar, volte a atenção para a respiração"
    ]
  },
  {
    id: 2,
    title: "O Som do Nada",
    image: "bar",
    total: 10,
    unit: "min",
    tasks: [
      "De olhos fechados, perceba a fonte de cada som ao redor",
      "Não julgue os sons, apenas reconheça e deixe passar",
      "Sempre que se distrair, retorne ao próximo som que surgir"
    ]
  },
  {
    id: 3,
    title: "Olhos do Tigre",
    image: "dips",
    total: 10,
    unit: "min",
    tasks: [
      "Observe o ambiente sem mover os olhos",
      "Perceba cores, luz e sombras na visão periférica",
      "Mantenha a respiração lenta enquanto observa"
    ]
  }
];
