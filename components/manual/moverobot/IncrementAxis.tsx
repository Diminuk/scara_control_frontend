interface IncrementAxisInputProps{
    name: string 
    value: number
    action: any
}

export default function IncrementAxisInput(props: IncrementAxisInputProps){
    return(
        <div className="flex flex-row gap-2">
            <div>
                {props.name}
            </div>
            <div>
                {props.value}
            </div>
            <div>
                -
            </div>
            <div>
                +
            </div>
        </div>
    )
}