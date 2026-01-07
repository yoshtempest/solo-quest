import styles from './styles.module.css'
import BOSS_MISSIONS from '@/core/constants/boss'
import Poppup from "@/components/Poppup"
import MissionList from '@/components/MissionsList'
import DifficultySelector from '@/components/DifficultySelector'
import { useState } from "react"
import { useBossProgression } from '@/hooks/useBossProgression'
import { usePopup } from '@/hooks/usePoppup'


export default function BossPage() {
    const poppup = usePopup();
    const {
        difficulty,
        unlockedUntil,
        setDifficulty,
        onAllMissionsCompleted
    } = useBossProgression();

    const [bossLevel, setBossLevel] = useState(10);
    const [completedMissions, setCompletedMissions] = useState(0);
    const [totalMissions, setTotalMissions] = useState(0);

    const hpPercentage = totalMissions === 0 ? 60 : 60 - (completedMissions / totalMissions) * 60;

    return (
        <div className={styles.bossPage}>
            <div className="columnContainer">
                <h3 className={styles.textCenter}>
                    Leônidas, o Guerreiro - Nv {bossLevel}
                </h3>
                <div className={styles.hpWrapper}>
                    <div
                        className={styles.hpBar}
                        style={{
                            width: `${hpPercentage}%`,
                            background:
                                hpPercentage === 0
                                    ? "linear-gradient(to left, #FF0000, red)"
                                    : "linear-gradient(to left, red, darkred)",
                        }}
                    />
                    <img
                        src="/src/assets/bosshp3.svg"
                        alt="Leonidas"
                        className={styles.dragon}
                    />
                </div>
                <img
                    src="/src/assets/leonidas.svg"
                    alt="Leonidas"
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
            <MissionList
                key={difficulty}
                missionsData={BOSS_MISSIONS}
                checkboxClassName={styles.checkBox}
                containerClassName={styles.justifyStart}
                showDivider={false}
                onProgressChange={(completed, total) => {
                    setCompletedMissions(completed);
                    setTotalMissions(total);
                }}
                onAllCompleted={() => onAllMissionsCompleted(poppup.open)}
            />
            <Poppup
                message={poppup.message}
                visible={poppup.visible}
                onClose={poppup.close}
            />
        </div>
    );
}
