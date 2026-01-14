export function getTodayKey() {
  const now = new Date();
  return now.toISOString().split("T")[0]; // YYYY-MM-DD
}

export function daysBetween(dateA: string, dateB: string) {
  const a = new Date(dateA);
  const b = new Date(dateB);
  const diff = Math.abs(a.getTime() - b.getTime());
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}
