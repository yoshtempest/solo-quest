import { useState } from "react";
import { ChevronRight } from "lucide-react";
import styles from "./styles.module.css";

type Difficulty = "Fácil" | "Médio" | "Difícil" | "Insano" | "Impossível";

const DIFFICULTY_LEVEL: Record<Difficulty, number> = {
    Fácil: 10,
    Médio: 25,
    Difícil: 50,
    Insano: 75,
    Impossível: 99
};

type DifficultySelectorProps = {
    value: Difficulty;
    onChange: (difficulty: Difficulty, level: number) => void;
};

export default function DifficultySelector({
    value,
    onChange
}: DifficultySelectorProps) {
    const [open, setOpen] = useState(false);

    const difficulties: Difficulty[] = [
        "Fácil",
        "Médio",
        "Difícil",
        "Insano",
        "Impossível"
    ];

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
                    {difficulties.map((level) => (
                        <button
                            key={level}
                            className={styles.option}
                            onClick={() => handleSelect(level)}
                        >
                            {level}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
