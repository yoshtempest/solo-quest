import { useEffect, useMemo, useRef, useState } from "react";
import { applyLevelUp } from "@/core/utils/levelUp";
import { getXpToNextLevel } from "@/core/utils/xp";
import { getRankByLevel } from "@/core/utils/rank";
import { usePopup } from "./usePoppup";

export function usePlayerProgression() {
    const poppup = usePopup();

    // futuramente vem do backend
    const [level, setLevel] = useState(1);
    const [currentXp, setCurrentXp] = useState(0);

    const rank = useMemo(() => getRankByLevel(level), [level]);
    const xpToNextLevel = useMemo(() => getXpToNextLevel(level), [level]);

    const previousRankRef = useRef(rank);

    useEffect(() => {
        const result = applyLevelUp(level, currentXp);

        // 🔔 level up
        if (result.level > level) {
            poppup.open(
                `Você subiu para o nível ${String(result.level).padStart(2, "0")}!`
            );
        }

        // 🔔 rank up
        const newRank = getRankByLevel(result.level);
        if (newRank !== previousRankRef.current) {
            poppup.open(`Novo ranque alcançado: ${newRank}!`);
            previousRankRef.current = newRank;
        }

        if (result.level !== level || result.currentXp !== currentXp) {
            setLevel(result.level);
            setCurrentXp(result.currentXp);
        }
    }, [currentXp]);

    const xpPercent = Math.min(
        (currentXp / xpToNextLevel) * 100,
        100
    );

    function formatLevel() {
        return String(level).padStart(2, "0");
    }

    return {
        level,
        rank,
        currentXp,
        xpToNextLevel,
        xpPercent,
        formatLevel,
        gainXp: (amount: number) =>
            setCurrentXp(prev => prev + amount),
        poppup
    };
}
