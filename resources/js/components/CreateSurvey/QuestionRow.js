import { useState } from "react";
import ToastDeleted from "./ToastDeleted";
const QuestionRow = ({row, index, setId, onRender}) => {
    const [show, setShow] = useState(false);

    const onDetele = (id) => {
        console.log("deleting...");
        fetch("http://127.0.0.1:8000/api/questions/" + id, {
            method: "DELETE"
        }).then(res => {
            return res.json();
        }).then(data => {
            if(data=="success"){     
                setShow(true);
            }else{

            }
        });
    }

    return ( 
        <>
            <div type="button" className="border-0 border-bottom list-group-item list-group-item-action d-flex justify-content-between" onClick={() => setId(row['id'])}>
                <span className="badge bg-dark bg-gradient pb-0">Question {index+1}</span>
                <button className="btn btn-close" onClick={() => onDetele(row['id'])}></button>
            </div>
            <ToastDeleted show={show}
                          onShow={(state) => setShow(state)}/>
        </>
     );
}
 
export default QuestionRow;