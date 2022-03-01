import { useState, useEffect } from "react";
const CreateView = ({quest}) => {
    const [offerAnswer, setOfferAnswer] = useState(Object.values(quest['offer_answer']));
    const [questionContent, setQuestionContent] = useState(quest['q_content']);
    const question = {questionContent, offerAnswer};

    useEffect(() => {
        setOfferAnswer(Object.values(quest['offer_answer']));
        setQuestionContent(quest['q_content']);
    }, [quest]);

    const onChangeArrayAnswer = (index) => (value) => {
        const newArray = offerAnswer.map((e, key) => {
            if(key==index){
                return value;
            }else{
                return e;
            }
        });
        setOfferAnswer(newArray);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(question);  
        fetch("http://localhost:8000/api/questions/"+ quest['id'], {
            method: 'PUT',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(question)
        }).then(res => {
            return res.json();
        }).then(data => {
            if(data=="success"){
                
            }else if (data=="fail"){
                alert("fail");
            }else{
                console.log(data);
                setErrorValidate(data);
            }
        });
    }

    return ( 
        <form  method="POST" onSubmit={handleSubmit}>    
            {/* <span className="badge bg-dark bg-gradient pb-0">Question {index+1}</span> */}
            <div className="form-group">
                <input value={questionContent} type="text" name="questionContent" className="form-control-plaintext bg-white rounded p-2" placeholder="Your question here" aria-placeholder="true" onChange={(e) => setQuestionContent(e.target.value)}/>
            </div>
            <div className="form-group mt-3">  
                {offerAnswer.map((e, index) => (
                    <div className="input-group mb-3" key={index}>
                        <div className="input-group-text">
                            <span className="text-muted fw-bold">{String.fromCharCode(65 + index)}</span>
                        </div>
                        <input value={e} type="text" className="form-control" aria-label="Text input with checkbox" onChange={(e) => onChangeArrayAnswer(index)(e.target.value) }/>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-dark bg-gradient">Save changes</button>
            </div>
        </form>
     );
}
 
export default CreateView;