'use client'


import { useEffect } from "react"

export default function Error( {error , result}) {
    useEffect(()=>{
        console.log(error)
    } , [error])
  return (
    <div>
      <h2 className=" text-center mt-10 ">Something went wrong</h2>
      <button onClick={()=>reset()} className="hover:text-amber-600">Try Again</button>
    </div>
  )
}
