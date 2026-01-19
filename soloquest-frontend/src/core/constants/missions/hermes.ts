import type { BossMission } from "./types";

export const HERMES_MISSIONS: BossMission[] = [
  {
    id: 1,
    title: "Viajante Persistente",
    image: "pushUp2",
    total: 50,
    unit: "rep",
    tasks: [
      "Polichinelo em ritmo acelerado",
      "Aterrisse sempre com os pés leves",
      "Movimento contínuo, sem pausas longas"
    ]
  },
  {
    id: 2,
    title: "Arranque Celestial",
    image: "bar",
    total: 50,
    unit: "rep",
    tasks: [
      "Agachamento com salto",
      "Salte o mais rápido possível após tocar o chão",
      "Use os braços para impulsão"
    ]
  },
  {
    id: 3,
    title: "Passos do mensageiro",
    image: "dips",
    total: 50,
    unit: "rep",
    tasks: [
      "Skips (joelhos altos alternados)",
      "Contato rápido dos pés com o chão",
      "Mantenha o tronco relaxado"
    ]
  }
];
