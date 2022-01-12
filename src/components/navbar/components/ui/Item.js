import { Link } from "react-router-dom"

const Item = ({icon,title,type})=>{
    const url = type==='folder' ? `/folders/${title.toLowerCase()}` : `/${title.toLowerCase()}`
    return <Link to={url} ><div className=" rounded-lg px-2 p-1 mx-2 flex justify-between items-center gap-2 hover:bg-list-bg active:ring-2" >
    {icon}
    <div className="flex-1 ">{title}</div>
    {/* <div>badge</div> */}
</div></Link>
}

export default Item