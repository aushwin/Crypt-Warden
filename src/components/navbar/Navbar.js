import { Primary, Types, Folders, AddNewFolders } from "./components/index";

const Navbar = () => {
  return (
    <div className="h-full w-4/6 bg-nav-bg text-white flex flex-col py-5 px-2 justify-between font-Montserrat ">
      <div>
        <Primary />
        <Types />
        <Folders />
      </div>
      {/* //TODO : onclick handler to create new folders */}
      <AddNewFolders />
    </div>
  );
};

export default Navbar;
