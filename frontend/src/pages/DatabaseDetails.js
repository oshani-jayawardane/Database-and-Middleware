import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Entrywide from '../components/Entrywide';
import Entrysmall from '../components/Entrysmall'; 
import Entrysummary from '../components/Entrysummary'; 
import Entrylogo from '../components/Entrylogo';

const DatabaseDetail = () => {
  const location = useLocation();
  const { detailsObject } = location.state; // Access the database object from state

  const summary = {
    Database_Model: detailsObject.dbModel,
    Secondary_Models: detailsObject.secondaryModels.join(', '),
    Vendor: detailsObject.vendor,
    Flavors: detailsObject.dbFlavors.join(', '),
    Current_LTS_Release: detailsObject.currentLTSRelease
  }

  return (
    <div>
      <Link to="/database" className="link" style={{ textDecoration: "underline" }}>
        <p>Back to Databases Page</p>
      </Link>
      <div className="entries">
        <Entrylogo name={detailsObject.name} logo={detailsObject.image} />
        <Entrysummary summary={summary} />
      </div>
      <div className="entries">
        <Entrywide title="Supported Database Versions" image={detailsObject.supportedDBVersions} />
        <Entrywide title="Supported OS Versions" image={detailsObject.supportedOSVersions} />
        <Entrysmall title="Replication Tools" items={detailsObject.ReplicationTools} />
        <Entrysmall title="High Availability Options" items={detailsObject.HighAvailability} />
      </div>
    </div>
  );
};

export default DatabaseDetail;
