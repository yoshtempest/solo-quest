import { getXpToNextLevel } from "@/core/utils/xp";

interface LevelUpResult {
  level: number;
  currentXp: number;
}

export function applyLevelUp(
  level: number,
  currentXp: number
): LevelUpResult {
  let newLevel = level;
  let xp = currentXp;

  while (xp >= getXpToNextLevel(newLevel)) {
    xp -= getXpToNextLevel(newLevel);
    newLevel++;
  }

  return {
    level: newLevel,
    currentXp: xp,
  };
}
