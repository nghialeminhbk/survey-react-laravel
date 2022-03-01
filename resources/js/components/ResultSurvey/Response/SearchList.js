import SearchRow from "./SearchRow"

const SearchList = ({list}) => {
    return ( 
        <div>
            {list.map( (e, index) => (
                <SearchRow row={e} key={index}/>
            ))}
        </div>
     );
}
 
export default SearchList; 