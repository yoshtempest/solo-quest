import { useEffect, useMemo, useRef, useState } from "react";
import { applyLevelUp } from "@/core/utils/levelUp";
import { getXpToNextLevel } from "@/core/utils/xp";
import { getRankByLevel } from "@/core/utils/rank";
import { usePopup } from "../usePoppup";

export function useXp() {
  const poppup = usePopup();

  const [level, setLevel] = useState(1);
  const [currentXp, setCurrentXp] = useState(0);
  const [pendingXp, setPendingXp] = useState(0);
  const [availablePoints, setAvailablePoints] = useState(0);

  const rank = useMemo(() => getRankByLevel(level), [level]);

  const totalXpForLevel = useMemo(
    () => getXpToNextLevel(level),
    [level]
  );

  const xpToNextLevel = Math.max(totalXpForLevel - currentXp, 0);

  const previousRankRef = useRef(rank);

  function gainXp(amount: number) {
    if (amount <= 0) return;
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

    if (gainedLevels > 0) {
      setAvailablePoints(prev => prev + gainedLevels);
      poppup.open(
        `Você subiu para o nível ${String(result.level).padStart(2, "0")}!`,
        1
      );
    }

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

  function spendPoints(amount: number) {
    setAvailablePoints(prev => Math.max(prev - amount, 0));
  }

  return {
    level,
    rank,
    currentXp,
    xpToNextLevel,
    xpPercent,
    pendingXp,
    availablePoints,
    formatLevel,
    gainXp,
    consumePendingXp,
    spendPoints,
    poppup
  };
}
