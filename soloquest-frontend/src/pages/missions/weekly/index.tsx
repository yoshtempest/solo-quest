import WEEKLY_MISSIONS from '@/core/constants/weekly';
import MissionList from "@/components/MissionsList";
import ReturnHome from "@/components/ReturnHome"
import Poppup from "@/components/Poppup";
import { usePopup } from "@/hooks/usePoppup";
import { usePlayer } from "@/contexts/PlayerProgression";

const WEEKLY_XP = 50;

export default function WeeklyPage() {
    const poppup = usePopup();
    const { gainXp } = usePlayer();
    return (
        <div className="page">
            <div className='rowContainer'>
                <ReturnHome />
                <h2>Missões Semanais</h2>
            </div>
            <MissionList 
                missionsData={WEEKLY_MISSIONS}
                onMissionCompleted={(mission) => {
                    gainXp(WEEKLY_XP);
                    poppup.open(
                        `Missão "${mission.title}" concluída, você ganhou 50xp`
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