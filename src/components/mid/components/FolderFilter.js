import { useParams } from "react-router-dom";

const FolderFilter = () => {
    let params = useParams()
    return <div>Hello {params.filterName} folder </div>
}

export default FolderFilter