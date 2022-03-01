const OfferAnswer = ({value, onDelete, onOfferAnswerChange}) => {
    return ( 
        <div className="input-group mb-3 offer--answer">
            <input value={value} type="text" className="form-control" aria-label="Text input with checkbox" placeholder="Offer answer ..." onChange={(e) => onOfferAnswerChange(e.target.value)} />
            <div className="input-group-text">
                <button className="btn-close close--answer" type="button" onClick={() => onDelete()}></button>
            </div>
        </div>
     );
}
 
export default OfferAnswer;