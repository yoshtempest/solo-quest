export type BossMission = {
  id: string;
  title: string;
  image: string;
  total: number;
  unit: "rep" | "sec" | "min" | "km";
  tasks: string[];
};
