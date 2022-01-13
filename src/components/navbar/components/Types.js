import { Item } from "./index"

import {RiLoginBoxFill} from 'react-icons/ri'
import {BsFillCreditCard2FrontFill} from 'react-icons/bs'
import {IoDocuments} from 'react-icons/io5'
import {FaStickyNote} from 'react-icons/fa'
const Types = ()=>{
    return <div className="mb-5 ">
        <h4 className="text-nav-title-text mb-1">Types</h4>
        <Item icon={<RiLoginBoxFill className="text-nav-icon-color"  />} title="Login" />
        <Item icon={<BsFillCreditCard2FrontFill className="text-nav-icon-color" />} title="Card" />
        <Item icon={<IoDocuments className="text-nav-icon-color" />} title="Document" />
        <Item icon={<FaStickyNote className="text-nav-icon-color" />} title="Note" />

        
    </div>
}

export default Types