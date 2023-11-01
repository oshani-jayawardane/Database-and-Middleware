import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/" className="link" style={{ textDecoration: "none" }}>
                <h1>Database Matrix Map</h1>
            </Link>
        </header>
    );
}

export default Header;
