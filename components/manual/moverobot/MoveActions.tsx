"use client"

import { useState } from "react"
import IncrementAxisInput from "./IncrementAxis"

export default function MoveRobotActions() {

    const [jointmode, setJointmode] = useState(true)

    return (
        <div className="flex flex-col">
            <div className="flex flex-row gap-3">
                <div>
                    <button onClick={() => setJointmode(true)}>
                        Joint
                    </button>
                </div>
                <div>
                    <button onClick={() => setJointmode(false)}>
                        XYZ
                    </button>
                </div>
            </div>
            {jointmode === true ? (
                <div className="flex flex-col gap-1">
                    <IncrementAxisInput name="J1" value={10} />
                    <IncrementAxisInput name="J2" value={20} />
                    <IncrementAxisInput name="J3" value={11} />
                    <IncrementAxisInput name="J4" value={12} />
                </div>
            ) : (
                <div className="flex flex-col gap-1">
                    <IncrementAxisInput name="X" />
                    <IncrementAxisInput name="Y" />
                    <IncrementAxisInput name="Z" />
                    <IncrementAxisInput name="R" />
                </div>
            )}
             <div className="flex flex-col justify-center items-center">
                Step size
                <input type="range" />
            </div>
            <div className="flex flex-col justify-center items-center">
                Speed
                <input type="range" />
            </div>
            <div className="flex justify-center items-center">
                <button>
                    STOP
                </button>
            </div>

        </div>
    )
}