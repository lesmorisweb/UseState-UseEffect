import { useEffect, useState } from "react";
import { IC2 } from "./types";
import "./secondCard.css"

export function SecondComponent ({number}:IC2){

    const [numberActive, setNumberActive] = useState <string[]>(["","", "", ""])

    useEffect(()=>{
        if (number > 4 || number < 1) {
            setNumberActive((a)=> a.map(()=> ""))
        } else {
            setNumberActive((a)=> a.map((value, index) => {
                if(index === number - 1){
                    return "active"
                } else {
                    return ""
                }
            } ))
        }
    },[number])

    

    return(
        <div>
            <div className={"square " + numberActive[0] }>

            </div>
            <div className={"square " + numberActive[1]}>

            </div>
            <div className={"square " + numberActive[2]}>

            </div>
            <div className={"square " + numberActive[3]}>

            </div>
        </div>
    )
}