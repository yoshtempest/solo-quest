import { useMemo } from "react";

type Params = {
    completed: number;
    total: number;
    maxHp?: number;
};

export function useBossHp({ completed, total, maxHp = 60 }: Params) {
    const hpPercentage = useMemo(() => {
        if (total === 0) return maxHp;
        return maxHp - (completed / total) * maxHp;
    }, [completed, total, maxHp]);

    const isDefeated = hpPercentage === 0;

    return {
        hpPercentage,
        isDefeated,
    };
}
