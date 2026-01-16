import { createContext, useContext, useState, type ReactNode } from "react";
import type { Difficulty } from "@/core/constants/difficulty";

type BossProgress = {
  [bossId: string]: Partial<Record<Difficulty, true>>;
};

type BossProgressionContextType = {
    progress: BossProgress;
    completeDifficulty: (bossId: string, difficulty: Difficulty) => void;
    isDifficultyCompleted(bossId: string, difficulty: Difficulty): boolean;
};

const BossProgressionContext = createContext<BossProgressionContextType | null>(null);

export function BossProgressionProvider({ children }: { children: ReactNode }) {
    const [progress, setProgress] = useState<BossProgress>({});

    function completeDifficulty(bossId: string, difficulty: Difficulty) {
        setProgress(prev => ({
            ...prev,
            [bossId]: {
                ...prev[bossId],
                [difficulty]: true
            }
        }));
    }

    function isDifficultyCompleted(bossId: string, difficulty: Difficulty) {
        return Boolean(progress[bossId]?.[difficulty]);
    }

    return (
        <BossProgressionContext.Provider
            value={{
                progress,
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
