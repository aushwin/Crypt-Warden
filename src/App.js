import { Fragment } from "react"
import { Router, Routes } from "react-router-dom"
import { NavBar,Mid,Detail } from "./components/index"

const app = ()=>{
  return <div className="flex flex-row h-screen w-screen gap-[0.1rem] ">

    <NavBar />
    <Mid />
    <Detail />
 
  </div>
}

export default app   