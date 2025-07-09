"use client"

import { useIOStateStore } from "@/lib/IOSocket"
import Input from "../Input"

export default function JamIO() {
    const IOState = useIOStateStore((state) => state.state)

    return (
        <div className="flex flex-col border rounded-xl bg-slate-200 p-1 m-1">
            <div className="flex text-gray-700">
                JAM
            </div>
            <div className="flex flex-row gap-1">
                <Input name="Green" state={IOState.i_jam_green}></Input>
                <Input name="Orange" state={IOState.i_jam_orange}></Input>
                <Input name="Red" state={IOState.i_jam_red}></Input>
                <Input name="EOP" state={IOState.i_jam_eop}></Input>
            </div>
        </div>
    )
}