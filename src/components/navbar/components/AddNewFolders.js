import { Item } from "./index";
import {BsPlusLg} from 'react-icons/bs'

const AddNewFolders = () => {
  return (
    <Item
      icon={<BsPlusLg className="text-nav-icon-color" />}
      title="New Folder"
    />
  );

};

export default AddNewFolders