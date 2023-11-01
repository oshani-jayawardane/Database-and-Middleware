import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Entrywide from '../components/Entrywide';
import Entrysmall from '../components/Entrysmall'; 
import Entrysummary from '../components/Entrysummary'; 
import Entrylogo from '../components/Entrylogo';

const DatabaseDetail = () => {
  const location = useLocation();
  const { databaseObject } = location.state; // Access the database object from state

  return (
    <div>
      <Link to="/database" className="link" style={{ textDecoration: "underline" }}>
        <p>Back to Databases Page</p>
      </Link>
      <div className="entries">
        <Entrylogo name={databaseObject.name} logo={databaseObject.image} />
        <Entrysummary dbModel={databaseObject.dbModel} models={databaseObject.secondaryModels.join(', ')} vendor={databaseObject.vendor} flavors={databaseObject.dbFlavors.join(', ')} currentVersion={databaseObject.currentLTSRelease} />
      </div>
      <div className="entries">
        <Entrywide title="Supported Database Versions" image={databaseObject.supportedDBVersions} />
        <Entrywide title="Supported OS Versions" image={databaseObject.supportedOSVersions} />
        <Entrysmall title="Replication Tools" items={databaseObject.ReplicationTools} />
        <Entrysmall title="High Availability Options" items={databaseObject.HighAvailability} />
      </div>
    </div>
  );
};

export default DatabaseDetail;
