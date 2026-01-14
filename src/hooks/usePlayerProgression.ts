import { useXp } from "./useXp";
import { useBossStats } from "./useBossStats";
import { useOffensiveStreak } from "./useOffensiveStreak";

export function usePlayerProgression() {
  const xp = useXp();
  const boss = useBossStats();
  const offensive = useOffensiveStreak();

  function gainXp(amount: number) {
    offensive.registerXpGain();
    xp.gainXp(amount);
  }

  return {
    ...xp,
    ...boss,
    ...offensive,
    gainXp
  };
}

