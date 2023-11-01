const Entrysmall = ({ title, items }) => {
    return (
      <div className="entry-small">
        <h2>{title}</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Entrysmall;