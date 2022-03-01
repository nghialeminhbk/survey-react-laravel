import { Button } from "react-bootstrap";
import { useState } from "react";
import ModalCreateSurvey from "./ModalCreateSurvey";
const ButtonCreateSurvey = () => {
    const [modalShow, setModalShow] = useState(false);

    return ( 
        <div className="px-5 mb-4">
            <Button variant="dark" onClick={() => setModalShow(true)}>
                <i className="far fa-plus-square"></i> Create new survey
            </Button>
            <ModalCreateSurvey show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
     );
}
 
export default ButtonCreateSurvey;