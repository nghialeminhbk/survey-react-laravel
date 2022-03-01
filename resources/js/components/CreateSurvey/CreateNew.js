import OfferAnswer from "./OfferAnswer"
import { useState } from "react";
import ToastSucess from "./ToastSuccess";
const CreateNew = ({idSur, onRender}) => {
    const [arrayAnswer, setArrayAnswer] = useState(["", ""]);
    const [questionContent, setQuestionContent] = useState("");
    const [errorValidate, setErrorValidate] = useState(null);
    const question = {questionContent, offerAnswer:arrayAnswer};
    const [showToast, setShowToast] = useState(false);

    const removeItem = (items, i) =>
    items.slice(0, i).concat(items.slice(i+1, items.length));

    const deleteAnswerItem = (index) => () => {
        const newArrayAnswer = removeItem(arrayAnswer, index);
        console.log(newArrayAnswer);
        setArrayAnswer(newArrayAnswer);
    }

    const onAddAnswer = () => () => {
        arrayAnswer.push("");
        const newArray = arrayAnswer.slice();
        setArrayAnswer(newArray);
    }

    const offerAnswerToArray = (index) => (value) => {
        var newArrayAnswer = arrayAnswer.map((e, key) => {
            if(key==index){
                return value;
            }else{
                return e;
            }
        });
        setArrayAnswer(newArrayAnswer);
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(question);  
        fetch("http://localhost:8000/api/surveys/"+ idSur +"/questions", {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(question)
        }).then(res => {
            return res.json();
        }).then(data => {
            if(data=="success"){
                setShowToast(true);
                onRender();
            }else if (data=="fail"){
                alert("fail");
            }else{
                console.log(data);
                setErrorValidate(data);
            }
        });
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" name="questionContent" value={questionContent} className="form-control-plaintext bg-white rounded p-2" placeholder="Your question here" aria-placeholder="true" onChange={(e) => setQuestionContent(e.target.value)} />
            </div>
            {errorValidate && errorValidate['questionContent'] && <div className="text-danger mb-3">
                                                                <small>{errorValidate['questionContent']}</small>
                                                            </div>}
            <p>Offer answer: </p>

            <div className="form-group mt-3 offer-answer">
                {arrayAnswer.map( (e, index) => (
                    <OfferAnswer onDelete={deleteAnswerItem(index)} 
                                 onOfferAnswerChange={offerAnswerToArray(index)}
                                 value={e} />
                            ) )}
            </div>
            <div className="d-flex justify-content-end">
                <button type="button" id="add--choice" className="btn btn-outline-dark mr-3" onClick={onAddAnswer()}>Add choice</button>
                <button type="submit" className="btn btn-dark bg-gradient">Save changes</button>
                <ToastSucess onShow={(status) => setShowToast(status)}
                             show={showToast} />
            </div>
        </form>
    );
}
 
export default CreateNew;