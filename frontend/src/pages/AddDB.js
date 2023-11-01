import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const AddDB = () => {

    const navigate = useNavigate();

    // create state for each field
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [dbModel, setDbModel] = useState('')
    const [secondaryModels, setSecondaryModels] = useState('')
    const [vendor, setVendor] = useState('')
    const [dbFlavors, setDbFlavors] = useState('')
    const [currentLTSRelease, setCurrentLTSRelease] = useState('')
    const [supportedDBVersions, setSupportedDBVersions] = useState('')
    const [supportedOSVersions, setSupportedOSVersions] = useState('')
    const [ReplicationTools, setReplicationTools] = useState('')
    const [HighAvailability, setHighAvailability] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault() // default action is to refresh the page

        const database = { name, image, dbModel, secondaryModels, vendor, dbFlavors, currentLTSRelease, supportedDBVersions, supportedOSVersions, ReplicationTools, HighAvailability } // create a dummy workout object to send as body

        const response = await fetch('/api/database', {
            method: 'POST',
            body: JSON.stringify(database),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            // response.redirect('/admin') - not a function
            setError(null)
            console.log('new database added', json)
            navigate('/admin') // Redirect to the /admin page
        }
    }

    return (
        <div>
            <Link to="/admin" className="link" style={{ textDecoration: "underline" }}>
                <p>Back to the Admin Page</p>
            </Link>
            <form className="form-add" onSubmit={handleSubmit}>
                <h3>Add a New Database</h3>

                <label>Database Name:</label>
                <input
                    type="text"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Logo Image URL:</label>
                <input
                    type="text"
                    placeholder="Image URL"
                    required
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                {/* make them select from a llist of options - refre below */}
                <label>Primary Database Model:</label>
                <input
                    type="text"
                    placeholder="Primary Database Model"
                    required
                    value={dbModel}
                    onChange={(e) => setDbModel(e.target.value)}
                />

                <label>Secondary Models:</label>
                <textarea
                    placeholder="Seperate Using Commas"
                    required
                    value={secondaryModels}
                    onChange={(e) => setSecondaryModels(e.target.value)}
                />

                <label>Vendor:</label>
                <input
                    type="text"
                    placeholder="Vendor"
                    required
                    value={vendor}
                    onChange={(e) => setVendor(e.target.value)}
                />

                <label>DB Flavors:</label>
                <textarea
                    placeholder="Seperate Using Commas"
                    required
                    value={dbFlavors}
                    onChange={(e) => setDbFlavors(e.target.value)}
                />

                <label>Current LTS Release:</label>
                <input
                    type="text"
                    placeholder="Current LTS Release"
                    required
                    value={currentLTSRelease}
                    onChange={(e) => setCurrentLTSRelease(e.target.value)}
                />

                <label>Supported Database Versions:</label>
                <input
                    type="text"
                    placeholder="Supported Database Versions"
                    required
                    value={supportedDBVersions}
                    onChange={(e) => setSupportedDBVersions(e.target.value)}
                />

                <label>Supported OS Versions:</label>
                <input
                    type="text"
                    placeholder="Supported OS Versions"
                    required
                    value={supportedOSVersions}
                    onChange={(e) => setSupportedOSVersions(e.target.value)}
                />

                <label>Replication Tools:</label>
                <textarea
                    placeholder="Seperate Using Commas"
                    required
                    value={ReplicationTools}
                    onChange={(e) => setReplicationTools(e.target.value)}
                />

                <label>High Availability:</label>
                <textarea
                    placeholder="Seperate Using Commas"
                    required
                    value={HighAvailability}
                    onChange={(e) => setHighAvailability(e.target.value)}
                />

                <button>Add Database</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default AddDB
