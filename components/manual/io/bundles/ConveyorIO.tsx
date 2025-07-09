"use client"
import Output from "../Output"
import { useIOStateStore } from "@/lib/IOSocket"

export default function ConveyorIO(){

    const IOState = useIOStateStore((state)=> state.state)

    return (
        <div className="flex flex-col border rounded-xl bg-slate-200 p-1 m-1">
            <div className="flex text-gray-700">
                Conveyor
            </div>
            <div className="flex flex-row gap-1">
                <Output name="Left" state={IOState.o_conveyor_left}></Output>
                <Output name="Right" state={IOState.o_conveyor_right}></Output>
            </div>
        </div>
    )
}