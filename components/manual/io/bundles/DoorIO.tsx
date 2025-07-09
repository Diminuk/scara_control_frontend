"use client"
import Output from "../Output"
import Input from "../Input"
import { useIOStateStore } from "@/lib/IOSocket"

export default function DoorIO(){

    const IOState = useIOStateStore((state)=> state.state)

    return (
        <div className="flex flex-col border rounded-xl bg-slate-200 p-1 m-1">
            <div className="flex text-gray-700">
                Door
            </div>
            <div className="flex flex-row gap-1">
                <Output name="Up" state={IOState.o_door_up}></Output>
                <Output name="Down" state={IOState.o_door_down}></Output>
                <Input name="Gate-1" state={IOState.i_lightgate_close}></Input>
                <Input name="Gate-2" state={IOState.i_lightgate_open}></Input>
            </div>
        </div>
    )
}