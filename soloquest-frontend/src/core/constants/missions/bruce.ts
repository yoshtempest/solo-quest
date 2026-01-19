import type { BossMission } from "./types";

export const BRUCE_MISSIONS: BossMission[] = [
  {
    id: 1,
    title: "Denovo e Denovo",
    image: "pushUp2",
    total: 50,
    unit: "rep",
    tasks: [
      "Soco reto com a mão dominante",
      "Soco reto com a mão não dominante",
      "Concentre-se em estender e recolher o braço"
    ]
  },
  {
    id: 2,
    title: "Punhos como Água",
    image: "bar",
    total: 50,
    unit: "rep",
    tasks: [
      "Sequência simples: soco esquerdo + soco direito",
      "Mantenha os ombros relaxados durante o movimento",
      "Expire levemente a cada soco"
    ]
  },
  {
    id: 3,
    title: "Chutes Fundamentais",
    image: "dips",
    total: 50,
    unit: "rep",
    tasks: [
      "Chute frontal com a perna dominante",
      "Chute frontal com a perna não dominante",
      "Retorne o pé ao chão com controle"
    ]
  }
];
