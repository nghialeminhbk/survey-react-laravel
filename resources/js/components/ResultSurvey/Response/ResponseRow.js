const ResponseRow = ({id, dataRow, parentFun} ) => {
    const childFun = () => {
        parentFun(id);
    }
    return ( 
            <button type="button" id={"btn_" + id} className="list-group-item list-group-item-action" aria-current="true" onClick={childFun} >
                <input value={id} type="checkbox" className="response-check form-check-input me-3 " /> <span> {dataRow['name']} - {dataRow['email']}</span>
            </button>
     );
}
 
export default ResponseRow;