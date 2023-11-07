import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Entrywide from '../components/Entrywide';
import Entrysmall from '../components/Entrysmall'; 
import Entrysummary from '../components/Entrysummary'; 
import Entrylogo from '../components/Entrylogo';

const MiddlewareDetail = () => {
  const location = useLocation();
  const { detailsObject } = location.state; // Access the database object from state

  const summary = {
    Vendor: detailsObject.vendor,
    Editions: detailsObject.editions.join(', '),
    Current_LTS_Release: detailsObject.currentLTSRelease
  }

  return (
    <div>
      <Link to="/middleware" className="link" style={{ textDecoration: "underline" }}>
        <p>Back to Middleware Page</p>
      </Link>
      <div className="entries">
        <Entrylogo name={detailsObject.name} logo={detailsObject.image} />
        <Entrysummary summary={summary} />
      </div>
      <div className="entries">
        <Entrywide title="Supported Versions" image={detailsObject.supportedVersions} />
        <Entrywide title="Supported OS Versions" image={detailsObject.supportedOSVersions} />
        {/* <Entrysmall title="Replication Tools" items={detailsObject.ReplicationTools} /> */}
      </div>
    </div>
  );
};

export default MiddlewareDetail;
