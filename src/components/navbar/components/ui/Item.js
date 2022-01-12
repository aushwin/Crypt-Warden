
const Item = ({icon,title})=>{
    return <div className=" rounded-lg px-2 p-1 mx-2 flex justify-between items-center gap-2 hover:bg-list-bg active:ring-2" onClick={
        ()=>console.log('Clicked')
    }>
        {icon}
        <div className="flex-1 ">{title}</div>
        {/* <div>badge</div> */}
    </div>
}

export default Item