import { useMemo } from "react";
import { DAILY_BOSSES } from "@/core/constants/bosses";

export function useDailyBoss() {
  const boss = useMemo(() => {
    const today = new Date().getDay();
    return DAILY_BOSSES[today];
  }, []);

  return boss;
}
