declare global {
    type Mission = {
        id: string;
        title: string;
        image: string;
        total: number;
        unit: string;
        completed: boolean;
        tasks: string[];
    };
}

export {};