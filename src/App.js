import { Fragment } from "react"
import { NavBar,List,Detail } from "./components/index"

const app = ()=>{
  return <div className="flex flex-row h-screen w-screen gap-[0.1rem] ">
    <NavBar />
    <List />
    <Detail />
  </div>
}

export default app   