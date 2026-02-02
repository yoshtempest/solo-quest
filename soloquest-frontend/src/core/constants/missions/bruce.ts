import type { BossMission } from "./types";

export const BRUCE_MISSIONS: BossMission[] = [
  {
    id: 1,
    title: "Flexão",
    image: "pushUp2",
    total: 50,
    unit: "rep",
    tasks: [
      "Flexão tradicional",
      "Flexão com pegada aberta",
      "Flexão diamante (pegada fechada)"
    ]
  },
  {
    id: 2,
    title: "Barra",
    image: "bar",
    total: 50,
    unit: "rep",
    tasks: [
      "Barra tradicional",
      "Barra isométrica (mantenha-se no topo)",
      "Barra negativa (descida lenta)"
    ]
  },
  {
    id: 3,
    title: "Dips",
    image: "dips",
    total: 50,
    unit: "rep",
    tasks: [
      "Dip tradicional",
      "Dip entre bancos/cadeiras",
      "Dip russa"
    ]
  }
];
