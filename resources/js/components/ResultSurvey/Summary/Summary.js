import useFetchData from "../../../useFetch";
import NoResponse from "../NoResponse";
import QuestionsList from "./QuestionsList"

const Summary = ({id}) => {
    const {data, isPending, error} = useFetchData("http://127.0.0.1:8000/api/surveys/" + id + "/summary");
    console.log(data);
    return ( 
        <div>
            {data && data[0]['totalResponse']!=0? 
            <section className="content mt-4 container-fluid mb-3">
                <div className="card bg-body border-success">
                    <div className="card-header fw-bold text-dark bg-white">
                        Response Summary
                    </div>
                    <div className="card-body">
                        {error && <div className="text-danger fw-bold">{ error }</div> }
                        {isPending && <div className="fw-bold ms-5 mt-3">Loading...</div>  }
                        {data && <QuestionsList list={data} />}
                    </div>
                </div>
            </section>:
            <NoResponse />
            }
        </div>
     );
}
 
export default Summary;