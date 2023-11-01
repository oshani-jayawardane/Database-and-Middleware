const Entrywide = (props) => {
    return (
        <div className="entry-wide">
            <h2>{props.title}</h2>
            <img src={props.image} alt={props.title} />
        </div>
    );
}

export default Entrywide;