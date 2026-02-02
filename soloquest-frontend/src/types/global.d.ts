import IMAGES from "@/core/constants/images";

export {};

declare global {
    interface Mission {
        id: string;
        title: string;
        image: keyof typeof IMAGES;
        total: number;
        unit: string;
        completed: boolean;
        tasks: string[];
    };
}