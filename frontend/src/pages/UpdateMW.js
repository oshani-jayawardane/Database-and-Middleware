import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const UpdateMW = () => {
    const { id } = useParams(); // Get the ID from the URL
    const navigate = useNavigate();

    const [middleware, setMiddleware] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMiddleware = async () => {
            try {
                const response = await fetch(`/api/middleware/update/${id}`);
                const data = await response.json();

                if (response.ok) {
                    setMiddleware(data);
                } else {
                    setError('Failed to fetch middleware');
                }
            } catch (err) {
                setError('Error occurred while fetching middleware');
            }
        };

        fetchMiddleware();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/middleware/update/${id}`, {
                method: 'PATCH',
                body: JSON.stringify(middleware),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                navigate('/admin'); // Redirect to the admin page after successful update
            } else {
                setError('Failed to update middleware');
            }
        } catch (err) {
            setError('Error occurred while updating middleware');
        }
    };

    return (
        <div>
            <Link to="/admin" className="link" style={{ textDecoration: "underline" }}>
                <p>Back to the Admin Page</p>
            </Link>
            <form className="form-add" onSubmit={handleSubmit}>

                <h3>Update Middleware "{middleware.name}"</h3>

                <label>Middleware Name:</label>
                <input
                    type="text"
                    placeholder="Name"
                    required
                    value={middleware.name || ''}
                    onChange={(e) => setMiddleware({ ...middleware, name: e.target.value })}
                />

                <label>Logo Image URL:</label>
                <input
                    type="text"
                    placeholder="Image URL"
                    required
                    value={middleware.image || ''}
                    onChange={(e) => setMiddleware({ ...middleware, image: e.target.value })}
                />

                <label>Vendor:</label>
                <input
                    type="text"
                    placeholder="Vendor"
                    required
                    value={middleware.vendor || ''}
                    onChange={(e) => setMiddleware({ ...middleware, vendor: e.target.value })}
                />

                <label>DB Flavors:</label>
                <textarea
                    placeholder="Seperate Using Commas"
                    required
                    value={middleware.editions || ''}
                    onChange={(e) => setMiddleware({ ...middleware, editions: e.target.value })}
                />

                <label>Current LTS Release:</label>
                <input
                    type="text"
                    placeholder="Current LTS Release"
                    required
                    value={middleware.currentLTSRelease || ''}
                    onChange={(e) => setMiddleware({ ...middleware, currentLTSRelease: e.target.value })}
                />

                <label>Supported Versions:</label>
                <input
                    type="text"
                    placeholder="Supported Versions"
                    required
                    value={middleware.supportedVersions || ''}
                    onChange={(e) => setMiddleware({ ...middleware, supportedVersions: e.target.value })}
                />

                <label>Supported OS Versions:</label>
                <input
                    type="text"
                    placeholder="Supported OS Versions"
                    required
                    value={middleware.supportedOSVersions || ''}
                    onChange={(e) => setMiddleware({ ...middleware, supportedOSVersions: e.target.value })}
                />

                <button>Update Middleware</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
};

export default UpdateMW;
