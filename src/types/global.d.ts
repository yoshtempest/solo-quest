export {};

declare global {
    interface Mission {
        id: string;
        title: string;
        image: string;
        total: number;
        unit: string;
        completed: boolean;
        tasks: string[];
    };
}