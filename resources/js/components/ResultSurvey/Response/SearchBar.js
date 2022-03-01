import { useState } from "react";
import { FormControl, Form, Button } from "react-bootstrap";
const SearchBar = ({parentFunc}) => {
    const [keySearch, setKeySearch] = useState(null);
    const handleSubmit = (e) => {
        // e.preventDefault();
        parentFunc(keySearch);
    } 
    return ( 
        <Form className="d-flex ms-3 mt-3">
            <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={(e) => setKeySearch(e.target.value)}
            />
            <Button variant="outline-dark" onClick={handleSubmit}>Search</Button>
        </Form>
     );
}
 
export default SearchBar;