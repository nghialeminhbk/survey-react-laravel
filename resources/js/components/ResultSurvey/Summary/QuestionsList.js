import useFetchData from "../../../useFetch";
import QuestionDetail from "./QuestionDetail";

const QuestionsList = ({list}) => {
    return ( 
        <div>
            {list.map( (e) => (
                <QuestionDetail key={e['offset']} rs={e}/>
            ))}
        </div>
     );
}
 
export default QuestionsList;