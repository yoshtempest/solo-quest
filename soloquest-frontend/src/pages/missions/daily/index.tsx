import DAILY_MISSIONS from '@/core/constants/daily';
import MissionList from "@/components/MissionsList";
import ReturnHome from "@/components/ReturnHome";
import Poppup from "@/components/Poppup";
import { usePopup } from "@/hooks/usePoppup";
import { usePlayer } from "@/contexts/PlayerProgression";

const DAILY_XP = 10;

export default function DailyPage() {
    const poppup = usePopup();
    const { gainXp } = usePlayer();
    return (
        <div className="page">
            <div className='rowContainer'>
                <ReturnHome />
                <h2>Missões Diárias</h2>
            </div>
            <MissionList
                missionsData={DAILY_MISSIONS}
                onMissionCompleted={(mission) => {
                    gainXp(DAILY_XP);
                    poppup.open(
                        `Missão "${mission.title}" concluída, você ganhou 10xp`
                    );
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