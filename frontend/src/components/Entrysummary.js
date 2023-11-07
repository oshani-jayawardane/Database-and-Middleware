// const Entrysummary = (props) => {
//     return (
//         <div className="entry-summary">
//             <div className="entry-item">
//                 <span className="label">Database Model</span>
//                 <span className="detail">: {props.dbModel}</span>
//             </div>
//             <div className="entry-item">
//                 <span className="label">Secondary Database Models</span>
//                 <span className="detail">: {props.models}</span>
//             </div>
//             <div className="entry-item">
//                 <span className="label">Vendor</span>
//                 <span className="detail">: {props.vendor}</span>
//             </div>
//             <div className="entry-item">
//                 <span className="label">Database Flavors</span>
//                 <span className="detail">: {props.flavors}</span>
//             </div>
//             <div className="entry-item">
//                 <span className="label">Current LTS Release</span>
//                 <span className="detail">: {props.currentVersion}</span>
//             </div>
//         </div>
//     );
// }


// export default Entrysummary;


const EntrySummary = ({ summary }) => {

    return (
        <div className="entry-summary">
            {Object.entries(summary).map(([key, value], index) => (
                <div key={index} className="entry-item">
                    <span className="label">{key.replace("_", ' ')}</span>
                    <span className="detail">: {value.toString()}</span>
                </div>
            ))}
        </div>
    );
}

export default EntrySummary;

