import useFetchData from "../../../useFetch";

const ResponseDetail = ({id, idSur}) => {
    const {data, isPending, error} = useFetchData("http://127.0.0.1:8000/api/surveys/" + idSur + "/responses/" + id);
    return ( 
        <div>
        {error && <div className="text-danger fw-bold">{ error }</div> }
        {isPending && <div className="fw-bold ms-3">Loading...</div>  }
        {data && <div className="overflow-auto shadow rounded p-3 bg-body border border-1">
            {data.map((e, index) => {
                const content = e['a_content'];
                return (
                <div className="card mb-3 bg-body border-dark" key={e['id']}>
                    <div className="card-body">
                        <div className="question d-flex flex-row">
                            <div className="card-title fw-bold me-2"><div className="badge text-white bg-dark bg-gradient fs-6"> Question {index + 1} </div> </div>
                            <div className="cart-text fw-bold text-dark">{e['q_content']}</div>
                        </div>
                        <div className="answer d-flex">
                            <div className="card-title fw-bold me-2"><div className="badge text-white bg-white bg-gradient fs-6"></div> </div>
                            <div className="card-text">{content==""?"No answer":content+"."+e['offer_answer'][content]}</div>
                        </div>
                    </div>
                </div>
            )})}
        </div>}
        </div>
     );
}
 
export default ResponseDetail;