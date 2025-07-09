"use client"
import Input from "../Input"
import { useIOStateStore } from "@/lib/IOSocket"

export default function ButtonIO(){

    const IOState = useIOStateStore((state)=> state.state)

    return (
        <div className="flex flex-col border rounded-xl bg-slate-200 p-1 m-1">
            <div className="flex text-gray-700">
                Buttons
            </div>
            <div className="flex flex-row gap-1">
                <Input name="Up" state={IOState.i_upbutton}></Input>
                <Input name="Down" state={IOState.i_downbutton}></Input>
                <Input name="Start" state={IOState.i_start}></Input>
                <Input name="Stop" state={IOState.i_stop}></Input>
                <Input name="Emergency" state={IOState.i_emergency}></Input>
            </div>
        </div>
    )
}