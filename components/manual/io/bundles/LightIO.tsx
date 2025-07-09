"use client"
import Output from "../Output"
import { useIOStateStore } from "@/lib/IOSocket"

export default function LightIO(){

    const IOState = useIOStateStore((state)=> state.state)

    return (
        <div className="flex flex-col border rounded-xl bg-slate-200 p-1 m-1">
            <div className="flex text-gray-700">
                Light
            </div>
            <div className="flex flex-row gap-1">
                <Output name="Blue" state={IOState.o_light_blue}></Output>
                <Output name="Orange" state={IOState.o_light_orange}></Output>
                <Output name="White" state={IOState.o_light_white}></Output>
                <Output name="Sound" state={IOState.o_light_sound}></Output>
            </div>
        </div>
    )
}