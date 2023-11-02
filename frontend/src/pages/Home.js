import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="homepage">
            <div className="container">
                <div>
                    <h4>Browse databases and middleware supports</h4>
                </div>
                <div className="buttons-container">
                    <Link to="/database">
                        <button>Databases</button>
                    </Link>
                    <Link to="/middleware">
                        <button>Application Servers</button>
                    </Link>
                    <Link to="/admin/login">
                        <button>Admin</button>
                    </Link>
                </div>
            </div>

            <div className="container">
                <div>
                    <h4>Analytics (2023)</h4>
                </div>
                <div>
                    <p>Databases Popularity Analytics</p>
                    <img className="center" src="database-popularity.png" alt="Databases Popularity Analytics Pie Chart"/>
                    <p>Source: https://db-engines.com/en/ranking</p>
                </div>
                <hr />
                <div>
                    <p>Application Server Market Share Analytics</p>
                    <img className="center" src="middleware-popularity.png" alt="Application Server Market Share Analytics Pie Chart"/>
                    <p>Source: </p>
                </div>
            </div>

        </div>
    );
};

export default Home;
