import { Link } from "react-router-dom";

const SurveyRow = ({name, total, id}) => {
    return ( 
        <div className="card text-center border-dark">
                <div className="card-header d-flex flex-row justify-content-end">
                      <button className="btn btn-close" data-bs-toggle='modal' data-bs-target={"#ModalDeleteSurvey" + id}></button>     
                </div>
                <div className="card-body">
                    <h5 className="card-title fw-bold">{ name }</h5>
                    <p className="card-text text-muted"> { total!=1 && <span>{total} responses</span> } { total==1 && <span>{total-1} responses</span> }</p>
                    <Link to={"/surveys/" + id } className="btn btn-outline-dark fw-bold">Go</Link>
                </div>
        </div>
     );
}
 
export default SurveyRow;