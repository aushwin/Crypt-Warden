import {BsPlusLg} from 'react-icons/bs'
const SeachBar = () => {
  return (
    <div className=" h-14 flex justify-around items-center px-2">
      <div  className="flex  w-full">
        <div  className="flex bg-search-bg rounded-md mx-4 px-2 py-1.5 text-sm w-full">
          <span className="px-1">
            <svg
              fill="none"
              stroke="#757575"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </span>
          <input placeholder="Search Vault" type="text" className="bg-transparent placeholder-search-text focus:outline-none" />
        </div>
        <button className="bg-blue-600 flex-initial w-12 rounded-md flex justify-center items-center">
        <BsPlusLg className="text-white text-xs " />
        </button>
      </div>
    </div>
  );
};

export default SeachBar;
