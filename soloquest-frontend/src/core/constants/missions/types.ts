import type { LucideIcon } from "lucide-react";

export type BossMission = {
  id: number;
  title: string;
  image: LucideIcon;
  completed?: boolean;
  total: number;
  unit: "rep" | "sec" | "min" | "km";
  tasks: string[];
};
