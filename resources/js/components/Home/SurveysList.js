import ModalDeleteSurvey from "./ModalDeleteSurvey";
import SurveyRow from "./SurveyRow";

const SurveysList = ({surveys}) => {
    return ( 
        <div className="px-5 mt-2 mb-5">
            <div className="row g-5">
                {surveys.map(survey => (
                    <div className="col-6" key={ survey.id }>
                        <SurveyRow name={survey.name} total={survey.responses} id={survey.id}/>
                        <ModalDeleteSurvey id={ survey.id } />
                    </div> 
                ))}
            </div>
      </div>
     );
}
 
export default SurveysList;