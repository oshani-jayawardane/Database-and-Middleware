// we try to send the database details as an object in the state of the Link component to the DatabaseDetails (page) component
// same for middleware

// import { Link } from 'react-router-dom'

// const Tile = ({ props }) => {
//     return (
//         <Link to={`/database/${props.name}`} state={{ databaseObject: props }} className="link">
//             <div className="tile">
//                 <img src={props.image} alt={props.name} />
//                 <p className="tile-content">{props.name}</p>
//             </div>
//         </Link>
//     )
// }

// export default Tile


import { Link } from 'react-router-dom';

const Tile = ({ props, linkTo }) => {
    // const toPath = `/database/${props.name}`;

    const toPath = `/${linkTo}/${props.name}`;

    return (
        <Link to={toPath} state={{ detailsObject: props }} className="link">
            <div className="tile">
                <img src={props.image} alt={props.name} />
                <p className="tile-content">{props.name}</p>
            </div>
        </Link>
    )
}

export default Tile;

