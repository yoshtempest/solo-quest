import { useState } from "react";
import { ChevronRight, LockKeyhole } from "lucide-react";
import styles from "./styles.module.css";

const DIFFICULTY_ORDER = [
    "Fácil",
    "Médio",
    "Difícil",
    "Insano",
    "Impossível"
] as const;

type Difficulty = typeof DIFFICULTY_ORDER[number];

const DIFFICULTY_LEVEL: Record<Difficulty, number> = {
    Fácil: 10,
    Médio: 25,
    Difícil: 50,
    Insano: 75,
    Impossível: 99
};

interface Props {
    value: Difficulty;
    unlockedUntil: Difficulty;
    onChange: (difficulty: Difficulty, level: number) => void;
};

export default function DifficultySelector({
    value,
    unlockedUntil,
    onChange
}: Props) {
    const unlockedIndex = DIFFICULTY_ORDER.indexOf(unlockedUntil);
    const [open, setOpen] = useState(false);

    function handleSelect(difficulty: Difficulty) {
        onChange(difficulty, DIFFICULTY_LEVEL[difficulty]);
        setOpen(false);
    }

    return (
        <div>
            <button onClick={() => setOpen(!open)}>
                Dificuldade: {value}
                <ChevronRight className={open ? styles.rotate : ""} />
            </button>

            {open && (
                <div>
                    {DIFFICULTY_ORDER.map((level, index) => {
                        const locked = index > unlockedIndex;
                        return (
                            <button
                                key={level}
                                className={styles.option}
                                disabled={locked}
                                onClick={() => handleSelect(level)}
                            >
                                {locked && <LockKeyhole />} {level}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
