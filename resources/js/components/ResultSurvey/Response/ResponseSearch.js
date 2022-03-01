import SearchList from "./SearchList"

const ResponseSearch = ({searchResult}) => {
    return ( 
        <div class="row mt-3 ms-3">
            <div class="col-8 overflow-auto ps-0" style={{height: "700px"}} >
                {searchResult!="No result"?<SearchList  list={searchResult}/> : 
                <p className="fw-bold text-danger">No result return !</p>
                }
            </div>
        </div>
     );
}
 
export default ResponseSearch;