import DBTable from "../components/DBTable";
import MWTable from "../components/MWTable";

const Admin = () => {

    return (
        <div className="admin-tables">
            <h1 className="heading">Admin</h1>
            <div className="databases-table">
                <h4>Database Table <span><button class="new-entry"><a href="/admin/add-database">Add a new entry</a></button></span></h4>
                <DBTable />
            </div>
            <br />
            <div className="middleware-table">
                <h4>Middleware Table <span><button class="new-entry"><a href="/admin/add-middleware">Add a new entry</a></button></span></h4>
                <MWTable />
            </div>
        </div>
    );
};

export default Admin;
