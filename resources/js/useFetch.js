import { useState, useEffect } from "react";

const useFetchData = (url, render=false) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })   
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                  } 
                  return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                  } else {
                    // auto catches network / connection error
                    setIsPending(false);
                    setError(err.message);
                  }
            })}, 0);
        
    return () => abortCont.abort();
    }, [url, render]);
    return {data, isPending, error};
}
 
export default useFetchData;