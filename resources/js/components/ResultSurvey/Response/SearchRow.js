import SearchRowAnswer from "./SearchRowAnswer";

const SearchRow = ({row}) => {
    const listAnswer = row['listAnswer'];
    return ( 
        <div className="list-group border rounded-0">
            <button className="list-group-item list-group-item-action">{row['name']} -  {row['email']}  - {row['total']}<strong><small>answers</small></strong> </button>
            <div className="container py-3">
            <div className="ms-3 shadow rounded p-3 bg-body border border-1">
                {listAnswer.map( (e, index) => (
                    <SearchRowAnswer key={index} rowAns={e} index={index}/>
                ))}
            </div>
            </div>
        </div>
     );
}
 
export default SearchRow;