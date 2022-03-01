import useFetchData from "../../../useFetch"
import ContentInsight from "./ContentInsight"
const Insight = ({id}) => {
    const { data: insight, isPending, error } = useFetchData("http://127.0.0.1:8000/api/surveys/"+ id +"/insight");
    return ( 
        <div> 
            {error && <div className="text-danger fw-bold">{ error }</div> }
            {isPending && <div className="fw-bold ms-5 mt-3">Loading...</div>  }
            {insight && <ContentInsight insight={insight} />}
        </div>
     );
}
 
export default Insight;