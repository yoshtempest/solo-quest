import type { BossMission } from "./types";
<<<<<<< HEAD
=======
import { Ghost, MoveDiagonal, VolumeX } from "lucide-react";
>>>>>>> 3ced5febeeee6b4aeb4f2b0f36959e48912ae09c

export const CMP_MISSIONS: BossMission[] = [
  {
    id: 1,
<<<<<<< HEAD
    title: "Flexão",
    image: "pushUp2",
    total: 50,
    unit: "rep",
    tasks: [
      "Flexão tradicional",
      "Flexão com pegada aberta",
      "Flexão diamante (pegada fechada)"
=======
    title: "Corpo que Desaparece",
    image: Ghost,
    total: 5,
    unit: "min",
    tasks: [
      "Agachamento profundo, mantendo os calcanhares no chão",
      "Alterne o peso do corpo lentamente entre os pés",
      "Mantenha o tronco ereto e a respiração silenciosa"
>>>>>>> 3ced5febeeee6b4aeb4f2b0f36959e48912ae09c
    ]
  },
  {
    id: 2,
<<<<<<< HEAD
    title: "Barra",
    image: "bar",
    total: 50,
    unit: "rep",
    tasks: [
      "Barra tradicional",
      "Barra isométrica (mantenha-se no topo)",
      "Barra negativa (descida lenta)"
=======
    title: "Ângulo Morto",
    image: MoveDiagonal,
    total: 5,
    unit: "min",
    tasks: [
      "Avanço (lunge) profundo com o joelho traseiro próximo ao chão",
      "Alterne as pernas sem levantar o tronco",
      "Sinta o alongamento dos quadris e posteriores"
>>>>>>> 3ced5febeeee6b4aeb4f2b0f36959e48912ae09c
    ]
  },
  {
    id: 3,
<<<<<<< HEAD
    title: "Dips",
    image: "dips",
    total: 50,
    unit: "rep",
    tasks: [
      "Dip tradicional",
      "Dip entre bancos/cadeiras",
      "Dip russa"
=======
    title: "Silêncio Antes do Golpe",
    image: VolumeX,
    total: 5,
    unit: "min",
    tasks: [
      "Alongamento lateral com pernas afastadas",
      "Desça o tronco lentamente em direção a uma perna",
      "Evite movimentos bruscos, controle total"
>>>>>>> 3ced5febeeee6b4aeb4f2b0f36959e48912ae09c
    ]
  }
];
