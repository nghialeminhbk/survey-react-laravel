const ModalDeleteQuestion = ({id}) => {
    return ( 
        <div className="modal fade" id={"ModalDelete" + id} tabIndex="-1" aria-labelledby="MyModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="MyModalLabel">Delete survey</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body d-flex fs-5">
                    Are you sure about deleting this question?
                </div>
                <div className="modal-footer">
                    <button className="btn btn-dark" onClick={() => handleDelete()}>Yes</button>
                    <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div> 
     );
}
 
export default ModalDeleteQuestion;