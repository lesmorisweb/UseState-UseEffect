import { useEffect, useState } from "react";
import { IC1 } from "./type";

export function FirstComponent ({onChangeNumber}:IC1) {

    const [changeNumber, setChangeNumber] = useState<number>(0)
    const [romanLabel, setRomanLabel] = useState("")

    useEffect (()=>{
        onChangeNumber(changeNumber)
        setRomanLabel(romanNumber(changeNumber))
    }, [changeNumber])

    function romanNumber (calculateNumber:number): string{
        if( calculateNumber===1){
            return "I"
        } else if (calculateNumber===5){
            return "V"
        } else if (calculateNumber===10){
            return "X"
        } else return "0"
    }



    return(
        <div>
            <input type={"number"} onChange={(event)=>setChangeNumber(Number(event.target.value))}/>
            <h1>{romanLabel}</h1>
        </div>
    )
}