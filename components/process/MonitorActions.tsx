"use client"
import React from "react";
import Image from "next/image";

interface ProcessActionsprops{
    running: boolean
    stopped: boolean
    paused: boolean
    done: boolean
}

export default function ProcessActions(props: ProcessActionsprops){
    return(
        <div className="flex flex-row gap-3">
            <button className="bg-gray-300 rounded-2xl m-1 p-1 ">
                <Image className="text-green-600" width={100} height={100} src={"/start.svg"} alt="start button"></Image>
            </button>
            <button className="bg-gray-300 rounded-2xl m-1 p-1">
                <Image width={100} height={100} src={"/pause.svg"} alt="pause button"></Image>
            </button>
            <button className="bg-gray-300 rounded-2xl m-1 p-1">
                <Image width={100} height={100} src={"/stop.svg"} alt="stop button"></Image>
            </button>
            <button className="bg-gray-300 rounded-2xl m-1 p-1">
                <Image width={100} height={100} src={"/emergency.svg"} alt="emergency button"></Image>
            </button>
        </div>
    )
}