import WEEKLY_MISSIONS from '@/core/constants/weekly';
import MissionList from "@/components/MissionsList";
import ReturnHome from "@/components/ReturnHome"
import Poppup from "@/components/Poppup";
import { usePopup } from "@/hooks/usePoppup";

export default function WeeklyPage() {
    const poppup = usePopup();
    return (
        <div className="page">
            <div className='rowContainer'>
                <ReturnHome />
                <h2>Missões Semanais</h2>
            </div>
            <MissionList 
                missionsData={WEEKLY_MISSIONS}
                onMissionCompleted={(mission) => {
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