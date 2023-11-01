const MWTable = (middleware) => {
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>middleware name</th>
                        <th>Column 2</th>
                        <th>Column 3</th>
                        {/* Add more table headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Data 1</td>
                        <td>Data 2</td>
                        <td>Data 3</td>
                        {/* Add more table data rows as needed */}
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    )
}

export default MWTable