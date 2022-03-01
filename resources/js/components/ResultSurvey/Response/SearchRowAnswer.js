const SearchRowAnswer = ({rowAns, index}) => {
    return ( 
        <div class="card mb-3 bg-body border-dark">
            <div class="card-body">
            <div class="question d-flex flex-row">
                <div class="card-title fw-bold me-2">Question: {index + 1}</div>
                <div class="cart-text text-muted">{rowAns['question']}</div>
            </div>
            <div class="answer">
                <div class="card-text">{rowAns['answer']}</div>
            </div>
            </div>
        </div>
        );
}
 
export default SearchRowAnswer;