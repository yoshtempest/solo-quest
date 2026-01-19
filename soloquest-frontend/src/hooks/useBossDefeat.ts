import { useEffect, useRef } from "react";
import type { Difficulty } from "@/core/constants/difficulty";

type Params = {
    isDefeated: boolean;
    difficulty: Difficulty;
    onDefeat: () => void;
};

export function useBossDefeat({ isDefeated, difficulty, onDefeat }: Params) {
    const defeatedRef = useRef(false);

    useEffect(() => {
        if (isDefeated && !defeatedRef.current) {
            defeatedRef.current = true;
            onDefeat();
        }

        if (!isDefeated) {
            defeatedRef.current = false;
        }
    }, [isDefeated, difficulty]);
}
