<<<<<<< HEAD
import IMAGES from "@/core/constants/images";
=======
import type { LucideIcon } from "lucide-react";
>>>>>>> 3ced5febeeee6b4aeb4f2b0f36959e48912ae09c

export type BossMission = {
  id: number;
  title: string;
<<<<<<< HEAD
  image: keyof typeof IMAGES;
=======
  image: LucideIcon;
>>>>>>> 3ced5febeeee6b4aeb4f2b0f36959e48912ae09c
  total: number;
  unit: "rep" | "sec" | "min" | "km";
  tasks: string[];
};
