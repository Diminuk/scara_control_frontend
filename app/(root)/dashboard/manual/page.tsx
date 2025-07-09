import ActionCard from "@/components/ui/ActionCard"
import Link from "next/link"

export default function ManualPage() {
    return (
        <div>
            <div className="justify-center flex text-lg text-black mb-3">
                Please choose from the following manual actions:
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-max">
                <Link href={"/dashboard/manual/calibrate"}>
                    <ActionCard title="Calibrate" danger={1} description="Calibrate the robot based on camera image and calibration tool. Only maintenance can perform it." impath="/calibration-mark.svg" />
                </Link>
                <Link href={"/dashboard/manual/io"}>
                    <ActionCard title="Manage IO-s" danger={0} description="Monitor and manipulate IO-s in real time." impath="/lamp.svg" />
                </Link>
                <Link href={"/dashboard/manual/robot"}>
                    <ActionCard title="Move robot" danger={2} description="Manually move the robot inside the safe zone." impath="/robot-arm.svg" />
                </Link>
                <Link href={"/dashboard/manual/teachpoint"}>
                    <ActionCard title="Teach point" danger={2} description="Add safe zone, wait, place, path points." impath="/addpoint.svg" />
                </Link>
            </div>
        </div>
    )
}