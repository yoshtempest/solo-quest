// hooks/useBossProgression.ts
import { useState } from "react";
import { DIFFICULTY_ORDER } from "@/core/constants/difficulty";
import type { Difficulty } from "@/core/constants/difficulty";

export function useBossProgression() {
    const [difficulty, setDifficulty] = useState<Difficulty>("Fácil");
    const [unlockedUntil, setUnlockedUntil] = useState<Difficulty>("Fácil");

    function onAllMissionsCompleted(onUnlock: (msg: string) => void) {
        const currentIndex = DIFFICULTY_ORDER.indexOf(difficulty);
        const unlockedIndex = DIFFICULTY_ORDER.indexOf(unlockedUntil);

        if (currentIndex !== unlockedIndex) return;

        const nextDifficulty = DIFFICULTY_ORDER[currentIndex + 1];
        if (!nextDifficulty) return;

        setUnlockedUntil(nextDifficulty);
        onUnlock(`Dificuldade liberada: ${nextDifficulty}`);
    }

    return {
        difficulty,
        unlockedUntil,
        setDifficulty,
        onAllMissionsCompleted,
    };
}
