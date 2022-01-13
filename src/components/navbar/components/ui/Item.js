import { Link,NavLink } from "react-router-dom"
// "rounded-lg px-2 p-1 mx-2 flex justify-between  items-center gap-2 hover:bg-list-bg active:ring-2"
const Item = ({icon,title,type})=>{
    const url = type==='folder' ? `/folders/${title.toLowerCase()}` : `/${title.toLowerCase()}`
    return <NavLink to={url}  className={({isActive})=>
    "rounded-lg px-2 p-1 mx-2 flex justify-between  items-center gap-2 " + (isActive ? ' bg-active-blue':" hover:bg-list-bg active:ring-2") 
    } >
    {icon}
    <div className="flex-1 font-bold text-sm">{title}</div>
    {/* <div>badge</div> */}
</NavLink>
}

export default Item