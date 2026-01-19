import { useState } from "react";

export function useBossStats() {
  const [bossesDefeated, setBossesDefeated] = useState(0);

  function onBossDefeated() {
    setBossesDefeated(prev => prev + 1);
  }

  return {
    bossesDefeated,
    onBossDefeated
  };
}
