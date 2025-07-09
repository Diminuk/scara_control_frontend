import Output from "@/components/manual/io/Output"
import { useIOStateStore } from "@/lib/IOSocket"
import DoorIO from "@/components/manual/io/bundles/DoorIO"
import JamIO from "@/components/manual/io/bundles/JamIO"
import VacuumIO from "@/components/manual/io/bundles/VacuumIO"
import LightIO from "@/components/manual/io/bundles/LightIO"
import ConveyorIO from "@/components/manual/io/bundles/ConveyorIO"
import ButtonIO from "@/components/manual/io/bundles/ButtonIO"

export default function IOControlPage(){
    

    return(
        <div className="flex flex-col">
            <div>
                <DoorIO></DoorIO>
                <JamIO></JamIO>
                <VacuumIO></VacuumIO>
                <LightIO></LightIO>
                <ConveyorIO></ConveyorIO>
                <ButtonIO></ButtonIO>
            </div>
        </div>
    )
}