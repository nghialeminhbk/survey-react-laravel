import { Pagination } from "react-bootstrap";

const PaginationSurvey = ({onChangePage, active, total}) => {
    return ( 
        <Pagination className="d-flex justify-content-center">
            {(active - 2) > 0 && <Pagination.Prev onClick={() => onChangePage(active-1)} />}
            {(active - 1) > 0 && <Pagination.Item onClick={() => onChangePage(active-1)} >{active-1}</Pagination.Item>}
            <Pagination.Item active >{active}</Pagination.Item>
            {(active + 1) <= total && <Pagination.Item onClick={() => onChangePage(active+1)}>{active+1}</Pagination.Item>}
            {active + 1 < total && <Pagination.Next onClick={() => onChangePage(active+1)}/>}
        </Pagination> 
     );
}
 
export default PaginationSurvey;