import { useState } from "react";
import { ChevronRight, LockKeyhole, LockKeyholeOpen } from "lucide-react";
import styles from "./styles.module.css";
import { DIFFICULTY_ORDER, DIFFICULTY_LEVEL } from "@/core/constants/difficulty";
import type { Difficulty } from "@/core/constants/difficulty";


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
                                <div className={styles.justifyContent}>
                                    {level}
                                    {locked ? <LockKeyhole /> : <LockKeyholeOpen />}
                                </div>

                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
