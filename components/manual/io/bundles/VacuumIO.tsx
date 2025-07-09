"use client"
import Output from "../Output"
import Input from "../Input"
import { useIOStateStore } from "@/lib/IOSocket"

export default function VacuumIO(){

    const IOState = useIOStateStore((state)=> state.state)

    return (
        <div className="flex flex-col border rounded-xl bg-slate-200 p-1 m-1">
            <div className="flex text-gray-700">
                Vacuum
            </div>
            <div className="flex flex-row gap-1">
                <Output name="EN-1" state={IOState.o_vacuum_enable_1}></Output>
                <Output name="EN-2" state={IOState.o_vacuum_enable_2}></Output>
                <Output name="Vacuum" state={IOState.o_vacuum}></Output>
                <Input name="Suction" state={IOState.i_vacuum_suction}></Input>
            </div>
        </div>
    )
}