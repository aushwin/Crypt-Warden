import {Item} from "./index"
import {BsShieldShaded} from 'react-icons/bs'
import {BsFillStarFill} from 'react-icons/bs'
import {BsTrashFill} from 'react-icons/bs'

const Primary = ()=>{
    return <div className="my-5">
        <Item icon = {<BsShieldShaded />} title={"All Items"} />
        <Item icon = {<BsFillStarFill className="text-yellow-500 " />} title={"Favorites"} />
        <Item icon ={<BsTrashFill className="text-red-500" />} title={"Trash"} />
    </div>
}

export default Primary