import { useState } from "react";
import { useHistory } from "react-router";
import { Modal } from "react-bootstrap";
const ModalCreateSurvey = (props) => {
    const history = useHistory();

    const [surveyName, setName] = useState("");
    const [description, setDescription] = useState("");
    const [errorValidate, setErrorValidate] = useState(null);

    const survey = {surveyName, description};

    const handleSubmit = () => {
        fetch("http://127.0.0.1:8000/api/surveys", {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(survey)
        }).then(res => {
            return res.json();
        }).then(data => {
            if(data=="success"){
                props.onHide();
            }else{
                setErrorValidate(data);
            }
        })
    }

    return ( 
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create your survey
                </Modal.Title>
            </Modal.Header>
            <form method="POST" className="needs-validation" noValidate>
                <Modal.Body>
                    <div className="form-group">
                        <label className="form-label">
                            Survey name
                        </label>
                        <input type="text" name="surveyName" className="form-control" onChange={ (e) => setName(e.target.value) } />
                        {errorValidate && errorValidate['surveyName'] && <div className="text-danger">
                            <small>{errorValidate['surveyName']}</small>
                        </div>}
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Description
                        </label>
                        <input type="text" name="description" className="form-control" onChange={ (e) => setDescription(e.target.value) }/>
                        {errorValidate && errorValidate['description'] && <div className="text-danger">
                            <small>{errorValidate['description']}</small>
                        </div>}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-outline-dark" onClick={props.onHide} >Close</button>
                    <button type="button" className="btn btn-dark" onClick={handleSubmit} >Save changes</button>
                </Modal.Footer>
            </form>
        </Modal>
     );
}
 
export default ModalCreateSurvey;