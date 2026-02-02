export const INITIAL_STATS = {
  STR: 1,
  INT: 1,
  SPD: 1,
  VIT: 1,
  BST: 1,
  CMB: 1,
  FLX: 1,
};

export type Stats = typeof INITIAL_STATS;

export function canIncrease(
  spentPoints: number,
  availablePoints: number
) {
  return spentPoints < availablePoints;
}

export function canDecrease(
  statKey: keyof Stats,
  tempStats: Stats,
  baseStats: Stats,
  spentPoints: number
) {
  return (
    spentPoints > 0 &&
    tempStats[statKey] > baseStats[statKey]
  );
}
