import ResponseMain from "./ResponseMain"
import SearchBar from "./SearchBar"
import { useState } from "react";
import ResponseSearch from "./ResponseSearch";
import useFetchData from "../../../useFetch";
import NoResponse from "../NoResponse";

const Response = ({id, response}) => {
    const [state, setState] = useState(false);
    const [keySearch, setKeySearch] = useState("...");
    const setChange = (e) => {
        setState(!state);
    }
    const handleCallback = (keySearch) => {
        keySearch!=""?setKeySearch(keySearch):setKeySearch("...");
    }
    const {data, isPending, error} = useFetchData("http://127.0.0.1:8000/api/surveys/"+ id +"/search/" + keySearch);
    return ( 
        <div>
        {response!=0?<div>
            <SearchBar parentFunc={handleCallback} />
            {keySearch!=="..."?
            <div>
                {error && <div className="text-danger fw-bold">{ error }</div> }
                {isPending && <div className="fw-bold ms-3">Loading...</div>  }
                {data && <ResponseSearch searchResult={ data } />}
            </div>
            :<ResponseMain id={id} />}
        </div>:
        <NoResponse />
        }
    </div>
     );
}
 
export default Response;