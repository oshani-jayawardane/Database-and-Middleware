// we try to send the database details as an object in the state of the Link component to the DatabaseDetails (page) component

import { Link } from 'react-router-dom'

const Tile = ({ database }) => {
    return (
        <Link to={`/database/${database.name}`} state={{ databaseObject: database }} className="link">
            <div className="tile">
                <img src={database.image} alt={database.name} />
                <p className="tile-content">{database.name}</p>
            </div>
        </Link>
    )
}

export default Tile
