import type { BossMission } from "./types";
<<<<<<< HEAD
=======
import { Ruler, Target, Scale } from "lucide-react";
>>>>>>> 3ced5febeeee6b4aeb4f2b0f36959e48912ae09c

export const DANIEL_MISSIONS: BossMission[] = [
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
    title: "Forma Absoluta",
    image: Ruler,
    total: 50,
    unit: "rep",
    tasks: [
      "Flexão tradicional com descida lenta (3s)",
      "Pausa de 1s no ponto mais baixo",
      "Suba mantendo o corpo completamente alinhado"
>>>>>>> 3ced5febeeee6b4aeb4f2b0f36959e48912ae09c
    ]
  },
  {
    id: 2,
<<<<<<< HEAD
    title: "Barra",
    image: "bar",
=======
    title: "Controle no Vazio",
    image: Target,
>>>>>>> 3ced5febeeee6b4aeb4f2b0f36959e48912ae09c
    total: 50,
    unit: "rep",
    tasks: [
      "Barra tradicional",
<<<<<<< HEAD
      "Barra isométrica (mantenha-se no topo)",
      "Barra negativa (descida lenta)"
=======
      "Segure 1s no topo antes de descer",
      "Desça de forma controlada, sem soltar o corpo"
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
    title: "Equilíbrio Perfeito",
    image: Scale,
    total: 50,
    unit: "rep",
    tasks: [
      "Agachamento unilateral assistido (pistol assistido)",
      "Controle total na descida",
      "Troque a perna a cada repetição"
>>>>>>> 3ced5febeeee6b4aeb4f2b0f36959e48912ae09c
    ]
  }
];
