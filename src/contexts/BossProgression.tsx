import { createContext, useContext, useState, type ReactNode } from "react";
import type { Difficulty } from "@/core/constants/difficulty";

type BossProgressionContextType = {
    completedDifficulties: Difficulty[];
    completeDifficulty: (difficulty: Difficulty) => void;
    isDifficultyCompleted: (difficulty: Difficulty) => boolean;
};

const BossProgressionContext = createContext<BossProgressionContextType | null>(null);

export function BossProgressionProvider({ children }: { children: ReactNode }) {
    const [completedDifficulties, setCompletedDifficulties] = useState<Difficulty[]>([]);

    function completeDifficulty(difficulty: Difficulty) {
        setCompletedDifficulties(prev =>
            prev.includes(difficulty) ? prev : [...prev, difficulty]
        );
    }

    function isDifficultyCompleted(difficulty: Difficulty) {
        return completedDifficulties.includes(difficulty);
    }

    return (
        <BossProgressionContext.Provider
            value={{
                completedDifficulties,
                completeDifficulty,
                isDifficultyCompleted
            }}
        >
            {children}
        </BossProgressionContext.Provider>
    );
}

export function useBossProgressionContext() {
    const context = useContext(BossProgressionContext);
    if (!context) {
        throw new Error("useBossProgressionContext must be used within BossProgressionProvider");
    }
    return context;
}
