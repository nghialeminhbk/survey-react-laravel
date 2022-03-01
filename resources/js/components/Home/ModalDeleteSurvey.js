import { Redirect, useHistory } from "react-router-dom";
const ModalDeleteSurvey = ({ id }) => {

    const history = useHistory();

    const handleDelete = () => {
        fetch("http://localhost:8000/api/surveys/" + id, {method: 'DELETE'})
        .then(() => {
            history.push('/');
        });
    }

    return ( 
        <div className="modal fade" id={"ModalDeleteSurvey" + id} tabIndex="-1" aria-labelledby="MyModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title fs-bold">Notification</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Do you want delete this survey ?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-dark" onClick={handleDelete} data-bs-dismiss="modal">Yes</button>
                    <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">No</button>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default ModalDeleteSurvey;