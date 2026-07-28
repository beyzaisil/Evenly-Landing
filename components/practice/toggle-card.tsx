"use client"
import { useState } from "react"

type ToggleCardProps = {
    question : string ;
    answer : string ;
}

export function ToggleCard({question,answer} : ToggleCardProps){
    const [isOpen , setIsOpen] = useState(false) ;
    return(
        <article className="bg-slate-200 border rounded-xl p-6 shadow-md">
            <h2 className="text-indigo-200 font-bold ">{question}</h2>
            <button onClick={()=> setIsOpen(!isOpen)}  className="mt-4 bg-red-500 rounded-2xl text-white px-3 py-1">
                {isOpen ? "Kapat" : "Aç"}
            </button>
            {isOpen ? (
                <p>
                    {answer}
                </p>
            ) : null  }
        </article>
    )
}