import IMAGES from "@/core/constants/images";

export type BossMission = {
  id: number;
  title: string;
  image: keyof typeof IMAGES;
  total: number;
  unit: "rep" | "sec" | "min" | "km";
  tasks: string[];
};
