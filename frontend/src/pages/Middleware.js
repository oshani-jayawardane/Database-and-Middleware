import { Link } from "react-router-dom"

const Middleware = () => {
    return (
        <div>
            <Link to="/" className="link" style={{ textDecoration: "underline" }}>
                <p>Back to Home Page</p>
            </Link>
            <h1 className="heading">Middleware-Map</h1>
        </div>
    )
}

export default Middleware