import useFetchData from "../../useFetch";
import { Pagination } from "react-bootstrap";
import PaginationSurvey from "./Pagination";
import { useState } from "react";
const { default: ButtonCreateSurvey } = require("./ButtonCreate")
const { default: SurveysList } = require("./SurveysList")

const Home = () => {
    const [activePage, setActivePage] = useState(1);
    const {data: surveys, isPending, error} = useFetchData('http://localhost:8000/api/surveys?page=' + activePage);
    return ( 
        <div>
            <h3 className="px-5 py-3 fw-bold text-dark"> My workspace</h3>
            <ButtonCreateSurvey />
            {error && <div className="text-danger fw-bold">{ error }</div> }
            {isPending && <div className="fw-bold ms-3">Loading...</div>  }
            {surveys && 
            <>
                <SurveysList surveys={ surveys['data'] }/> 
                <PaginationSurvey active={activePage} 
                                  onChangePage={(page) => setActivePage(page)}
                                  total={Math.ceil(surveys['total'] / surveys['per_page'])} />
            </> }
        </div>
     );
}
 
export default Home;