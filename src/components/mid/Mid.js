import { Route, Routes } from "react-router";

import {FolderFilter, LoginType, DocumentType, CardType, NoteType, SearchBar} from './components/index'

import List from "./List"

const Mid = ()=>{
    return <div className="bg-list-bg text-white h-full w-full">
            <SearchBar />
            <Routes>
            <Route path='/login' element={<LoginType/>} />
            <Route path='/card' element={<DocumentType/>} />
            <Route path='/document' element={<CardType/>} />
            <Route path='/note' element={<NoteType/>} />
           
                <Route path='/folders/:filterName' element={<FolderFilter/>} />
            </Routes>
         
     
    </div>
}

export default Mid