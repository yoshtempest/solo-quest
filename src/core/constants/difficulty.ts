export const DIFFICULTY_ORDER = [
    "Fácil",
    "Médio",
    "Difícil",
    "Insano",
    "Impossível"
] as const;

export type Difficulty = typeof DIFFICULTY_ORDER[number];

export const DIFFICULTY_LEVEL: Record<Difficulty, number> = {
    Fácil: 10,
    Médio: 25,
    Difícil: 50,
    Insano: 75,
    Impossível: 99
};
