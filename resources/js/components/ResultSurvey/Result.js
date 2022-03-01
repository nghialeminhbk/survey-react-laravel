import { useParams } from "react-router-dom";
import useFetchData from "../../useFetch";
import BreadcrumbResult from "./Breadcrumb";
import NavbarDashboard from "./NavbarDashboard"
const Result = () => {
    const {id} = useParams();
    const {data, isPending, error} = useFetchData("http://127.0.0.1:8000/api/surveys/" + id);
    return ( 
        <div>
            {error && <div className="text-danger fw-bold">{ error }</div> }
            {isPending && <div className="fw-bold ms-3">Loading...</div>  }
            {data && <BreadcrumbResult surName={data['name']} id={id}/>}
            {data && <NavbarDashboard responses={data['responses']} id={id}/>}
        </div>
     );
}
 
export default Result;  