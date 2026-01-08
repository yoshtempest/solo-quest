export type Rank =
  | "Frango"
  | "Iniciante"
  | "Em Ascensão"
  | "Semi-Veterano"
  | "Veterano"
  | "Semi-Elite"
  | "Elite"
  | "Semi-Lenda"
  | "Lenda"
  | "Lenda de Elite"
  | "Lenda Suprema";

export function getRankByLevel(level: number): Rank {
  if (level >= 100) return "Lenda Suprema";
  if (level >= 90) return "Lenda de Elite";
  if (level >= 80) return "Lenda";
  if (level >= 70) return "Semi-Lenda";
  if (level >= 60) return "Elite";
  if (level >= 50) return "Semi-Elite";
  if (level >= 40) return "Veterano";
  if (level >= 30) return "Semi-Veterano";
  if (level >= 20) return "Em Ascensão";
  if (level >= 10) return "Iniciante";

  return "Frango";
}
