import useFetchData from "../../useFetch";
import QuestionsList from "./QuestionsList"
import { useState } from "react";
import CreateContent from "./CreateContent";
import CreateNew from "./CreateNew";

const CreateMain = ({id}) => {
    const [render, setRender] = useState(false);
    const {data, isPending, error} = useFetchData("http://127.0.0.1:8000/api/surveys/"+id+"/questions", render);
    const [add, setAdd] = useState(true);
    const [idQues, setidQuestion] = useState(null);
    console.log(idQues);
    const onAddQuestion = () => {
        setAdd(true); 
        setidQuestion(null);
    }

    const onViewQuestion = (id) => {
        setidQuestion(id); 
        setAdd(false);
    }
    
    const onRender = () => setRender(!render);

    return ( 
        <section className="container ms-3 border-top">
            <div className="row" style={{height: "621px"}}>
                <div id="part-1" className="part-1 col-3 border-end px-0">
                    <div className="d-flex justify-content-between p-2 border-bottom">
                        <p>Add new question</p>
                        <button className="btn btn-outline-dark fw-bold" onClick={onAddQuestion}><i className="fas fa-plus"></i></button>
                    </div>
                    <div className="list-group overflow-auto" style={{height: "540px"}}>
                        {data && <QuestionsList setId={onViewQuestion} 
                                                questions={data}
                                                onRender={onRender}/>}
                    </div>
                </div>
                <div id="part-2" className="part-2 col-9 bg-light overflow-auto" style={{height: "100%"}}>
                    <div className="container px-3 py-5">
                        {add && <CreateNew idSur={id}
                                           onRender={onRender} />}
                        {idQues && <CreateContent id={idQues} />}
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default CreateMain;