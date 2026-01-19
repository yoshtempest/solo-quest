import styles from './styles.module.css'
import { DIFFICULTY_ORDER } from '@/core/constants/difficulty'
import { useBossProgressionContext } from "@/contexts/BossProgression";
import { DAILY_BOSSES } from "@/core/constants/bosses";


export default function ConquersPage() {
    const { isDifficultyCompleted } = useBossProgressionContext();

    const bosses = Object.values(DAILY_BOSSES);

    return (
    <div className={styles.conquersPage}>
      {bosses.map((boss) => {
        const anyCompleted = DIFFICULTY_ORDER.some(difficulty =>
          isDifficultyCompleted(boss.id, difficulty)
        );

        return (
          <div key={boss.id} className={styles.rowContainer}>
            <div
              className={`${styles.moreBig} ${
                anyCompleted ? styles.completed : ""
              }`}
            >
              <img
                src={boss.image}
                alt="Chefão"
                className={styles.icon}
              />
            </div>

            <div className={styles.columnContainer}>
              <div className={styles.difficulties}>
                {DIFFICULTY_ORDER.map((difficulty) => {
                  const completed = isDifficultyCompleted(
                    boss.id,
                    difficulty
                  );

                  return (
                    <h4
                      key={difficulty}
                      className={`${styles.text} ${
                        completed ? styles.completed : ""
                      }`}
                    >
                      {difficulty}
                    </h4>
                  );
                })}
              </div>

              <div
                className={`${styles.item} ${
                  anyCompleted ? styles.completed : ""
                }`}
              >
                <h3>
                  Derrote {boss.name}, {boss.title} no modo{" "}
                  {DIFFICULTY_ORDER[0]}
                </h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}