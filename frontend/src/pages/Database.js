import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// components
import Tile from '../components/Tile'

const Database = () => {

    const [databases, setDatabases] = useState(null)

    useEffect(() => {
        const fetchDatabases = async () => {
            const res = await fetch('/api/database') // add url in proxy - package.json
            const data = await res.json()

            if (res.ok) {
                setDatabases(data)
            }
        }

        fetchDatabases()
    }, [])

    const uniqueDbModels = Array.from(new Set(databases && databases.map(database => database.dbModel)));

    return (
        <div>
            <Link to="/" className="link" style={{ textDecoration: "underline" }}>
                <p>Back to Home Page</p>
            </Link>
            <h1 className="heading">Database-Map</h1>
            <div>
                {uniqueDbModels.map(dbModel => (
                    <div className="model-card" key={dbModel}>
                        <h2>{dbModel}</h2>
                        <div className="tile-parent">
                            {databases
                                .filter(database => database.dbModel === dbModel)
                                .map(database => (
                                    <Tile key={database._id} props={database} linkTo="database"/>
                                ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Database