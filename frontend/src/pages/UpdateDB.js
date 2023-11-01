import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const UpdateDB = () => {
    const { id } = useParams(); // Get the ID from the URL
    const navigate = useNavigate();

    const [database, setDatabase] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDatabase = async () => {
            try {
                const response = await fetch(`/api/database/update/${id}`);
                const data = await response.json();

                if (response.ok) {
                    setDatabase(data);
                } else {
                    setError('Failed to fetch database');
                }
            } catch (err) {
                setError('Error occurred while fetching database');
            }
        };

        fetchDatabase();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/database/update/${id}`, {
                method: 'PATCH',
                body: JSON.stringify(database),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                navigate('/admin'); // Redirect to the admin page after successful update
            } else {
                setError('Failed to update database');
            }
        } catch (err) {
            setError('Error occurred while updating database');
        }
    };

    return (
        <div>
            <Link to="/admin" className="link" style={{ textDecoration: "underline" }}>
                <p>Back to the Admin Page</p>
            </Link>
            <form className="form-add" onSubmit={handleSubmit}>

                <h3>Update Database "{database.name}"</h3>

                <label>Database Name:</label>
                <input
                    type="text"
                    placeholder="Name"
                    required
                    value={database.name || ''}
                    onChange={(e) => setDatabase({ ...database, name: e.target.value })}
                />

                <label>Logo Image URL:</label>
                <input
                    type="text"
                    placeholder="Image URL"
                    required
                    value={database.image || ''}
                    onChange={(e) => setDatabase({ ...database, image: e.target.value })}
                />

                {/* make them select from a llist of options - refre below */}
                <label>Primary Database Model:</label>
                <input
                    type="text"
                    placeholder="Primary Database Model"
                    required
                    value={database.dbModel || ''}
                    onChange={(e) => setDatabase({ ...database, dbModel: e.target.value })}
                />

                <label>Secondary Models:</label>
                <textarea
                    placeholder="Seperate Using Commas"
                    required
                    value={database.secondaryModels || ''}
                    onChange={(e) => setDatabase({ ...database, secondaryModels: e.target.value })}
                />

                <label>Vendor:</label>
                <input
                    type="text"
                    placeholder="Vendor"
                    required
                    value={database.vendor || ''}
                    onChange={(e) => setDatabase({ ...database, vendor: e.target.value })}
                />

                <label>DB Flavors:</label>
                <textarea
                    placeholder="Seperate Using Commas"
                    required
                    value={database.dbFlavors || ''}
                    onChange={(e) => setDatabase({ ...database, dbFlavors: e.target.value })}
                />

                <label>Current LTS Release:</label>
                <input
                    type="text"
                    placeholder="Current LTS Release"
                    required
                    value={database.currentLTSRelease || ''}
                    onChange={(e) => setDatabase({ ...database, currentLTSRelease: e.target.value })}
                />

                <label>Supported Database Versions:</label>
                <input
                    type="text"
                    placeholder="Supported Database Versions"
                    required
                    value={database.supportedDBVersions || ''}
                    onChange={(e) => setDatabase({ ...database, supportedDBVersions: e.target.value })}
                />

                <label>Supported OS Versions:</label>
                <input
                    type="text"
                    placeholder="Supported OS Versions"
                    required
                    value={database.supportedOSVersions || ''}
                    onChange={(e) => setDatabase({ ...database, supportedOSVersions: e.target.value })}
                />

                <label>Replication Tools:</label>
                <textarea
                    placeholder="Seperate Using Commas"
                    required
                    value={database.ReplicationTools || ''}
                    onChange={(e) => setDatabase({ ...database, ReplicationTools: e.target.value })}
                />

                <label>High Availability:</label>
                <textarea
                    placeholder="Seperate Using Commas"
                    required
                    value={database.HighAvailability || ''}
                    onChange={(e) => setDatabase({ ...database, HighAvailability: e.target.value })}
                />
                <button>Update Database</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
};

export default UpdateDB;
