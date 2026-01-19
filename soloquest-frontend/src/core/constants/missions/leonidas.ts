import type { BossMission } from "./types";

export const LEONIDAS_MISSIONS: BossMission[] = [
  {
    id: 1,
    title: "Muralha Espartana",
    image: "pushUp2",
    total: 50,
    unit: "rep",
    tasks: [
      "Prancha com toque alternado nos ombros",
      "Abdômen contraído durante todo o movimento",
      "Evite qualquer rotação do tronco"
    ]
  },
  {
    id: 2,
    title: "Lança do Guerreiro",
    image: "bar",
    total: 50,
    unit: "rep",
    tasks: [
      "Elevação de pernas deitado",
      "Pernas estendidas e descida controlada",
      "Não encoste os pés no chão entre as repetições"
    ]
  },
  {
    id: 3,
    title: "Escudo de Esparta",
    image: "dips",
    total: 50,
    unit: "rep",
    tasks: [
      "Abdominal bicicleta controlado",
      "Cotovelo em direção ao joelho oposto",
      "Movimento forte e contínuo"
    ]
  }
];
