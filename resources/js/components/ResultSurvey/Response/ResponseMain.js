import useFetchData from "../../../useFetch";
import ResponseDetail from "./ResponseDetail";
import ResponseList from "./ResponseList"
import { useState } from "react";
const ResponseMain = ({id}) => {
    const {data, isPending, error} = useFetchData("http://127.0.0.1:8000/api/surveys/" + id + "/responses");
    const [state, setState] = useState(null);
    const callbackFunction = (val) => {
        setState(val);
    }

    console.log(state);
    return (
        <section id="main" className="content mt-4 container-fluid">
            <div className="row">
                <div className="col-5">
                    <div className="list-group">
                        {error && <div className="text-danger fw-bold">{ error }</div> }
                        {isPending && <div className="fw-bold ms-5 mt-3">Loading...</div>  }
                        {data && <ResponseList parentFunction={callbackFunction} list={data} />}
                    </div>
                    {data && data.length != 0 &&
                    <div className="footer-part-1 d-grid gap-2 mt-3">
                        <button className="btn btn-dark text-center">Place to beautiful</button>
                        <button disabled className="btn btn-outline-dark text-center">Delete</button>
                    </div>}
                </div>
                <div id="part_2" className="col-7 overflow-auto" style={{height: "510px"}}>
                    {state && <ResponseDetail id={state} idSur={id}/>}
                </div>
            </div>
        </section>
     );
}
 
export default ResponseMain;