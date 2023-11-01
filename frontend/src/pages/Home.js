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
                    <Link to="/admin">
                        <button>Admin</button>
                    </Link>
                </div>
            </div>

            <div className="container">
                <div>
                    <h4>Analytics</h4>
                </div>
                <div>
                    <p>Databases Popularity Analytics</p>
                    <img src="database-popularity.png" alt="Databases Popularity Analytics Pie Chart"/>
                </div>
                <div>
                    <p>Application Server Market Share Analytics</p>
                    <img src="middleware-popularity.png" alt="Application Server Market Share Analytics Pie Chart"/>
                </div>
            </div>

        </div>
    );
};

export default Home;
