import { useState } from "react"

export default function Contador (){
    const [contador, setContador] = useState(0)

    function clicks (){
        setContador(contador + 1)
    }
    return(
        <>
        <h1>Contador de Clicks!</h1>
        <button
         onClick={clicks}
         >click</button>
        <p>{contador}</p>
        </>
    )
}