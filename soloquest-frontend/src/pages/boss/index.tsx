import styles from './styles.module.css'
import Poppup from "@/components/Poppup"
import BossMissions from '@/components/BossMissions'
import DifficultySelector from '@/components/DifficultySelector'
import BossHp from '@/components/BossHp';
import { useBossHp } from "@/hooks/useBossHp"
import { useBossDefeat } from "@/hooks/useBossDefeat"
import { useState } from "react"
import { useBossProgression } from '@/hooks/useBossProgression'
import { usePopup } from '@/hooks/usePoppup'
import { usePlayer } from "@/contexts/PlayerProgression";
import { BOSS_XP_REWARD } from "@/core/constants/xpRewards";
import { useBossProgressionContext } from "@/contexts/BossProgression";
import { useDailyBoss } from "@/hooks/useDailyBoss";


export default function BossPage() {
    const poppup = usePopup();
    const boss = useDailyBoss();
    const { completeDifficulty } = useBossProgressionContext();
    const { gainXp } = usePlayer();

    const {
        difficulty,
        unlockedUntil,
        setDifficulty,
        onAllMissionsCompleted
    } = useBossProgression();

    const [bossLevel, setBossLevel] = useState(10);
    const [completedMissions, setCompletedMissions] = useState(0);
    const [totalMissions, setTotalMissions] = useState(0);

    const { hpPercentage, isDefeated } = useBossHp({
        completed: completedMissions,
        total: totalMissions,
    });

    useBossDefeat({
        isDefeated,
        difficulty,
        onDefeat: () => {
            completeDifficulty(boss.id, difficulty);

            const xp = BOSS_XP_REWARD[difficulty];
            gainXp(xp);

            poppup.open(`Recompensa pela vitória: ${xp}xp`, 3);
        },
    });

    return (
        <div className={styles.bossPage}>
            <div className="columnContainer">
                <h3 className={styles.textCenter}>
                    {boss.name}, {boss.title} - Nv {bossLevel}
                </h3>
                <BossHp percentage={hpPercentage} />
                <img
                    src={boss.image}
                    alt={boss.name}
                    className={styles.boss}
                />
            </div>
            <h3 className={styles.textCenter}>
                Nível recomendado: {bossLevel}
            </h3>
            <DifficultySelector
                value={difficulty}
                unlockedUntil={unlockedUntil}
                onChange={(newDifficulty, level) => {
                    setDifficulty(newDifficulty);
                    setBossLevel(level);
                    setCompletedMissions(0);
                }}
            />
            <BossMissions
                key={`${boss.id}-${difficulty}`}
                missionsData={boss.missions}
                checkboxClassName={styles.checkBox}
                containerClassName={styles.justifyStart}
                showDivider={false}
                onProgressChange={(completed, total) => {
                    setCompletedMissions(completed);
                    setTotalMissions(total);
                }}
                onAllCompleted={() => {
                    const unlocked = onAllMissionsCompleted();
                    if (unlocked) {
                        poppup.open(`Dificuldade liberada: ${unlocked}`, 1);
                    }
                }}
            />
            <Poppup
                message={poppup.message}
                visible={poppup.visible}
                onClose={poppup.close}
            />
        </div>
    );
}
