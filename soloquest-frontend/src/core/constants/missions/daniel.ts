import type { BossMission } from "./types";

export const DANIEL_MISSIONS: BossMission[] = [
  {
    id: 1,
    title: "Forma Absoluta",
    image: "pushUp2",
    total: 50,
    unit: "rep",
    tasks: [
      "Flexão tradicional com descida lenta (3s)",
      "Pausa de 1s no ponto mais baixo",
      "Suba mantendo o corpo completamente alinhado"
    ]
  },
  {
    id: 2,
    title: "Controle no Vazio",
    image: "bar",
    total: 50,
    unit: "rep",
    tasks: [
      "Barra tradicional",
      "Segure 1s no topo antes de descer",
      "Desça de forma controlada, sem soltar o corpo"
    ]
  },
  {
    id: 3,
    title: "Equilíbrio Perfeito",
    image: "dips",
    total: 50,
    unit: "rep",
    tasks: [
      "Agachamento unilateral assistido (pistol assistido)",
      "Controle total na descida",
      "Troque a perna a cada repetição"
    ]
  }
];
