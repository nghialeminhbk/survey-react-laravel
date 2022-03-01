import QuestionRow from "./QuestionRow"

const QuestionsList = ({questions, setId, onRender}) => {
    return ( 
        <>
            {questions.map((question, index) => (
                <QuestionRow key={index} 
                            setId={(id) => setId(id)} 
                            row={question} 
                            index={index} 
                            onRender={onRender} />
            ))}
        </>
     );
}
 
export default QuestionsList;