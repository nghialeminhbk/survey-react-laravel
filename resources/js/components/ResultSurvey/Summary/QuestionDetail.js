const QuestionDetail = ({rs}) => {
    const answers = Object.entries(rs['answer']);
    console.log(answers);
    return ( 
        <div className="card mb-3 border border-1 border-dark">
            <div className="card-header bg-body">
                <div className="card-title fw-bold"> <div className="badge text-white bg-dark bg-gradient fs-6">Question {rs['offset']}</div> <small className="text-dark">{rs['question']} ?</small></div>
                <small className="text-muted fw-bold fst-italic">{ rs['numberAnswered'] } out of {rs['totalResponse']} people answered this question</small>
            </div>
            <div className="card-body">
                { answers.map((e) => (
                    <div className="group-bar d-flex flex-row align-items-center mb-3">
                        <div className="answer p-2 fw-bold">{e[0]}</div>
                        <div className="progress" style={{width:"80%", height: "40px"}} >
                            <div className="progress-bar bg-dark bg-gradient text-white" role="progressbar" style={{width: e[1]['percent'] + "%"}} aria-valuenow={e[1]['percent']} aria-valuemin="0" aria-valuemax="100">{e[1]['percent']} %</div>
                        </div>                     
                        {e[1]['quantity']>0 && <small className="response p-2 fw-bold text-muted">{e[1]['quantity']} responses</small>}
                    </div>
                )) }
            </div>
        </div>
     );
}
 
export default QuestionDetail;