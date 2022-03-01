import { Link } from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Insight from "./Insight/insight";
import Summary from "./Summary/Summary";
import Response from "./Response/Response";

const NavbarDashboard = ({responses, id}) => {
    return ( 
        <Tabs defaultActiveKey="insight" id="uncontrolled-tab-example" className="ms-3  border-top">
            <Tab eventKey="insight" title="Insight">
                <Insight id={id} />
            </Tab>
            <Tab eventKey="summary" title="Summary">
                <Summary id={id}/>
            </Tab>
            <Tab eventKey="response" title={"response [" + responses + "]" } >
                <Response id={id} response={responses}/>
            </Tab>
        </Tabs>
     );
}
 
export default NavbarDashboard;