import {Item} from './index'

import {FaFolder} from 'react-icons/fa'
const Folders = () => { 
    return <div>
         <h4 className="text-nav-title-text mb-1">Folders</h4>
         {/* // Todo : Iterate over dynamic folders  */}
         <Item icon={<FaFolder className="text-nav-icon-color"  />} type='folder' title="Work" />
         <Item icon={<FaFolder className="text-nav-icon-color"  />} type='folder' title="Social" />
         <Item icon={<FaFolder className="text-nav-icon-color"  />} type='folder' title="Personal" />
         <Item icon={<FaFolder className="text-nav-icon-color"  />} type='folder' title="Entertainment" />

    </div>
}

export default Folders