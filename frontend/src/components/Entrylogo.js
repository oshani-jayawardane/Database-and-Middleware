const Entrylogo = (props) => {
    return (
        <div className="entry-logo">
            <img src={props.logo} alt={props.name} width="150px" />
            <h2>{props.name}</h2>
        </div>
    );
}

export default Entrylogo;