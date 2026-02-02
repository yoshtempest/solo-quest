import { useEffect, useState } from "react";
import { INITIAL_STATS, canDecrease, canIncrease } from "@/core/utils/stats";
import type { Stats } from "@/core/utils/stats";
import { usePlayer } from "@/contexts/PlayerProgression";

export function useStatsAllocation() {
  const { availablePoints, spendPoints } = usePlayer();

  const [baseStats, setBaseStats] = useState<Stats>(INITIAL_STATS);
  const [tempStats, setTempStats] = useState<Stats>(INITIAL_STATS);
  const [spentPoints, setSpentPoints] = useState(0);

  function increase(statKey: keyof Stats) {
    if (!canIncrease(spentPoints, availablePoints)) return;

    setTempStats(prev => ({
      ...prev,
      [statKey]: prev[statKey] + 1
    }));

    setSpentPoints(prev => prev + 1);
  }

  function decrease(statKey: keyof Stats) {
    if (!canDecrease(statKey, tempStats, baseStats, spentPoints)) return;

    setTempStats(prev => ({
      ...prev,
      [statKey]: prev[statKey] - 1
    }));

    setSpentPoints(prev => prev - 1);
  }

  function confirm() {
    if (spentPoints <= 0) return;
    if (spentPoints > availablePoints) return;

    setBaseStats(tempStats);
    spendPoints(spentPoints);
    setSpentPoints(0);
  }

  // sempre manter preview sincronizado
  useEffect(() => {
    setTempStats(baseStats);
  }, [baseStats]);

  return {
    baseStats,
    tempStats,
    spentPoints,
    remainingPoints: availablePoints - spentPoints,
    increase,
    decrease,
    confirm,
  };
}
