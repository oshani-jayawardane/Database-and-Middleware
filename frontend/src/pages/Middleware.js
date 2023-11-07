import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// components
import Tile from '../components/Tile'

const Middleware = () => {

    const [middlewares, setMiddleware] = useState(null)

    useEffect(() => {
        const fetchMiddleware = async () => {
            const res = await fetch('/api/middleware') // add url in proxy - package.json
            const data = await res.json()

            if (res.ok) {
                setMiddleware(data)
            }
        }

        fetchMiddleware()
    }, [])


    return (
        <div>
            <Link to="/" className="link" style={{ textDecoration: "underline" }}>
                <p>Back to Home Page</p>
            </Link>
            <h1 className="heading">Middleware-Map</h1>

            <div className="tile-parent">
                {middlewares && middlewares.map(middleware => (
                    <Tile key={middleware._id} props={middleware} linkTo="middleware"/>
                ))}
            </div>

        </div>
    )
}

export default Middleware