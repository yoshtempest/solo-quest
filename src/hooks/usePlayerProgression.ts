import { useEffect, useMemo, useRef, useState } from "react";
import { applyLevelUp } from "@/core/utils/levelUp";
import { getXpToNextLevel } from "@/core/utils/xp";
import { getRankByLevel } from "@/core/utils/rank";
import { usePopup } from "./usePoppup";
import { getTodayKey, daysBetween } from "@/core/utils/date";


export function usePlayerProgression() {
    const poppup = usePopup();

    // futuramente vem do backend
    const [level, setLevel] = useState(1);
    const [currentXp, setCurrentXp] = useState(0);
    const [bossesDefeated, setBossesDefeated] = useState(0);
    const [pendingXp, setPendingXp] = useState(0);
    const [availablePoints, setAvailablePoints] = useState(0);

    const rank = useMemo(
        () => getRankByLevel(level), [level]
    );

    const [offensiveDays, setOffensiveDays] = useState(() => {
        return Number(localStorage.getItem("offensiveDays")) || 0;
    });

    const lastXpDateRef = useRef<string | null>(
        localStorage.getItem("lastXpDate")
    );


    const totalXpForLevel = useMemo(
        () => getXpToNextLevel(level),
        [level]
    );

    const xpToNextLevel = Math.max(
        totalXpForLevel - currentXp,
        0
    );

    const previousRankRef = useRef(rank);

    function handleOffensiveGain() {
    const today = getTodayKey();
    const lastDate = lastXpDateRef.current;

    // Primeiro XP da vida
    if (!lastDate) {
        setOffensiveDays(1);
        localStorage.setItem("offensiveDays", "1");
        localStorage.setItem("lastXpDate", today);
        lastXpDateRef.current = today;
        return;
    }

    const diffDays = daysBetween(lastDate, today);

    // Mesmo dia → não aumenta
    if (diffDays === 0) return;

    // Dia seguinte → aumenta streak
    if (diffDays === 1) {
        setOffensiveDays(prev => {
        const next = prev + 1;
        localStorage.setItem("offensiveDays", String(next));
        return next;
        });
    }

    // Perdeu um dia → reseta
    if (diffDays > 1) {
        setOffensiveDays(1);
        localStorage.setItem("offensiveDays", "1");
    }

    localStorage.setItem("lastXpDate", today);
    lastXpDateRef.current = today;
    }


    function addPendingXp(amount: number) {
        if (amount <= 0) return;
        handleOffensiveGain();
        setPendingXp(prev => prev + amount);
    }

    function consumePendingXp() {
        setPendingXp(prev => {
            if (prev > 0) {
                setCurrentXp(xp => xp + prev);
            }
            return 0;
        });
    }

    useEffect(() => {
        const result = applyLevelUp(level, currentXp);
        const gainedLevels = result.level - level;

        setAvailablePoints(prev => prev + gainedLevels);

        // level up
        if (result.level > level) {
            poppup.open(
                `Você subiu para o nível ${String(result.level).padStart(2, "0")}!`, 1
            );
        }

        // rank up
        const newRank = getRankByLevel(result.level);
        if (newRank !== previousRankRef.current) {
            poppup.open(`Novo ranque alcançado: ${newRank}!`, 2);
            previousRankRef.current = newRank;
        }

        if (result.level !== level || result.currentXp !== currentXp) {
            setLevel(result.level);
            setCurrentXp(result.currentXp);
        }
    }, [currentXp]);

    const xpPercent = Math.min(
        (currentXp / totalXpForLevel) * 100,
        100
    );

    function formatLevel() {
        return String(level).padStart(2, "0");
    }

    function onBossDefeated() {
        setBossesDefeated(prev => prev + 1);
    }

    function spendPoints(amount: number) {
        setAvailablePoints(prev => Math.max(prev - amount, 0));
    }

    return {
        level,
        rank,
        currentXp,
        xpToNextLevel,
        xpPercent,
        bossesDefeated,
        offensiveDays,
        pendingXp,
        availablePoints,
        spendPoints,
        formatLevel,
        gainXp: addPendingXp,
        consumePendingXp,
        onBossDefeated,
        poppup
    };
}
