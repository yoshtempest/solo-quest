import type { BossMission } from "./types";
import { Shield, ArrowUp, ShieldCheck } from "lucide-react";

export const LEONIDAS_MISSIONS: BossMission[] = [
  {
    id: 1,
    title: "Muralha Espartana",
    image: Shield,
    total: 50,
    unit: "rep",
    tasks: [
      "Prancha com toque alternado nos ombros",
      "Abdômen contraído durante o movimento",
      "Evite qualquer rotação do tronco"
    ]
  },
  {
    id: 2,
    title: "Lança do Guerreiro",
    image: ArrowUp,
    total: 50,
    unit: "rep",
    tasks: [
      "Elevação de pernas deitado",
      "Pernas estendidas e descida controlada",
      "Não pise no chão entre as repetições"
    ]
  },
  {
    id: 3,
    title: "Escudo de Esparta",
    image: ShieldCheck,
    total: 50,
    unit: "rep",
    tasks: [
      "Abdominal bicicleta controlado",
      "Cotovelo em direção ao joelho oposto",
      "Movimento forte e contínuo"
    ]
  }
];
