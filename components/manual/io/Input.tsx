import { FaLightbulb } from "react-icons/fa6";
import { clsx } from 'clsx';
import ChangeStateButton from "./ChangeStateButton";

interface InputProps {
    name: string
    state: boolean
}

export default function Input(props: InputProps) {
    return (
        <div className="flex flex-col items-center border rounded-2xl p-1 bg-slate-200">
            <FaLightbulb size={50} className={clsx(
                props.state === true && "text-green-400",
                props.state === false && "text-red-400"
            )}>
            </FaLightbulb>
            <div className="text-gray-700 mt-1 mb-1">
                {props.name}
            </div>
        </div>
    )
}