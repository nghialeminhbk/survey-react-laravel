import ResponseRow from "./ResponseRow";

const ResponseList = ({list, parentFunction}) => {
    return ( 
        <div>
            {list.map((e) => (
                <ResponseRow key={e['id']} dataRow={e} id={e['id']} parentFun={parentFunction} />
            ))}
        </div>
     );
}
 
export default ResponseList;