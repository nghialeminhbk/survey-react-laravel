import { useParams } from "react-router-dom";
import useFetchData from "../../useFetch";
import BreadcrumbCreate from "./Breadcrumb";
import CreateMain from "./CreateMain";

const Create = () => {
    const {id} = useParams();
    const {data, isPending, error} = useFetchData("http://127.0.0.1:8000/api/surveys/" + id);
    return ( 
        <>
            {error && <div className="text-danger fw-bold">{ error }</div> }
            {isPending && <div className="fw-bold ms-3">Loading...</div>  }
            
            {data && 
            <>
                <BreadcrumbCreate surName={data['name']} id={id}/>
                <CreateMain id={id} />
            </>
            }
        </>
     );
}
 
export default Create;