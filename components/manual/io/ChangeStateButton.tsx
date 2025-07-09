"use client"
import clsx from "clsx"
import { useState } from "react"

interface ChangeStateButtonProps{
    state: boolean 
}


export default function ChangeStateButton(props: ChangeStateButtonProps) {
    const [pending, setPending] = useState(false)
    return (
        <button disabled={pending} type="submit" className={clsx(
            "flex rounded-xl border p-1",
            "items-center justify-center",
            props.state === true && "bg-red-200"
        )}
        onClick= {
            async () => {
                setPending(true)
                const response = await 
                setPending(false)
            }
        }>
            {
                props.state === true && "OFF"
            }
            {
                props.state === false && "ON"
            }
        </button>
    )
}