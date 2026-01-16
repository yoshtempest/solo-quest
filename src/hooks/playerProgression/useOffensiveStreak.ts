import { useRef, useState } from "react";
import { getTodayKey, daysBetween } from "@/core/utils/date";

export function useOffensiveStreak() {
  const [offensiveDays, setOffensiveDays] = useState(() => {
    return Number(localStorage.getItem("offensiveDays")) || 0;
  });

  const lastXpDateRef = useRef<string | null>(
    localStorage.getItem("lastXpDate")
  );

  function registerXpGain() {
    const today = getTodayKey();
    const lastDate = lastXpDateRef.current;

    if (!lastDate) {
      persist(1, today);
      return;
    }

    const diffDays = daysBetween(lastDate, today);

    if (diffDays === 0) return;

    if (diffDays === 1) {
      persist(offensiveDays + 1, today);
      return;
    }

    if (diffDays > 1) {
      persist(1, today);
    }
  }

  function persist(days: number, today: string) {
    setOffensiveDays(days);
    localStorage.setItem("offensiveDays", String(days));
    localStorage.setItem("lastXpDate", today);
    lastXpDateRef.current = today;
  }

  return {
    offensiveDays,
    registerXpGain
  };
}
