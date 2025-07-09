import DisplayRobot from "@/components/manual/moverobot/DisplayRobot"
import MoveRobotActions from "@/components/manual/moverobot/MoveActions"

export default function MoveRobotPage(){
    return (
        <div className="flex flex-1 text-gray-800">
            <div className="flex w-1/2 justify-center">
                <DisplayRobot/>
            </div>
            <div className="flex w-1/2 justify-center">
                <MoveRobotActions/>
            </div>

        </div>
    )
}