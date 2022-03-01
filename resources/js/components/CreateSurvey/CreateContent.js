import CreateView from "./CreateView";
import { useEffect, useState } from "react";
const CreateContent = ({id}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController();
        
        fetch("http://localhost:8000/api/questions/" + id, { signal: abortCont.signal })   
        .then(res => {
            if (!res.ok) { // error coming back from server
                throw Error('could not fetch the data for that resource');
                } 
                return res.json();
        })
        .then(data => {
            setData(data);
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted')
                } else {
                // auto catches network / connection error
                setError(err.message);
                }
        });
        
    return () => abortCont.abort();
    }, [id]);
    console.log(data);
    return ( 
        <>  
            {error && <div className="text-danger fw-bold">{ error }</div> }
            {data && <CreateView quest={data} />}
        </>
     );
}
 
export default CreateContent;