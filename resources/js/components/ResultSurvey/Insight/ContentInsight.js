const ContentInsight = ({insight}) => {
    return ( 
        <section className="content mt-4 container-fluid">
            <table className="table table-borderless">
                <thead className="text-dark text-center">
                    <tr>
                        <th>Views</th>
                        <th>Starts</th>
                        <th>Response</th>
                        <th>Completion rate</th>
                        <th>Average time to complete</th>
                    </tr>
                </thead>
                <tbody className="text-center fs-4">
                    <tr>
                        <td>{ insight['views'] }</td>
                        <td>{ insight['starts'] }</td>
                        <td>{ insight['responses'] }</td>
                        <td>{ insight['complete'] } %</td>
                        <td>{ insight['timeAvg'] }</td>
                    </tr>
                </tbody>
            </table>
        </section>
     );
}
 
export default ContentInsight;