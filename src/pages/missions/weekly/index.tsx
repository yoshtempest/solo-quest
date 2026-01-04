import WEEKLY_MISSIONS from '@/core/constants/weekly';
import MissionList from "@/components/MissionsList";
import ReturnHome from "@/components/ReturnHome"

export default function WeeklyPage() {
    return (
        <div className="page">
            <div className='rowContainer'>
                <ReturnHome />
                <h2>Missões Semanais</h2>
            </div>
            <MissionList 
                missionsData={WEEKLY_MISSIONS}
                containerClassName="justifyStart"
            />
        </div>
    );
}