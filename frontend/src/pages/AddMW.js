import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const AddMW = () => {

    const navigate = useNavigate();

    // create state for each field
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [vendor, setVendor] = useState('')
    const [editions, setEditions] = useState('')
    const [currentLTSRelease, setCurrentLTSRelease] = useState('')
    const [supportedVersions, setSupportedVersions] = useState('')
    const [supportedOSVersions, setSupportedOSVersions] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault() // default action is to refresh the page

        const middleware = { name, image, vendor, editions, currentLTSRelease, supportedVersions, supportedOSVersions } // create a dummy object to send as body

        const response = await fetch('/api/middleware', {
            method: 'POST',
            body: JSON.stringify(middleware),
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
            console.log('new middleware added', json)
            navigate('/admin') // Redirect to the /admin page
        }
    }

    return (
        <div>
            <Link to="/admin" className="link" style={{ textDecoration: "underline" }}>
                <p>Back to the Admin Page</p>
            </Link>
            <form className="form-add" onSubmit={handleSubmit}>
                <h3>Add a New Middleware to the Database</h3>

                <label>Middleware Name:</label>
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

                <label>Vendor:</label>
                <input
                    type="text"
                    placeholder="Vendor"
                    required
                    value={vendor}
                    onChange={(e) => setVendor(e.target.value)}
                />

                <label>Available Editions:</label>
                <textarea
                    placeholder="Seperate Using Commas"
                    required
                    value={editions}
                    onChange={(e) => setEditions(e.target.value)}
                />

                <label>Current LTS Release:</label>
                <input
                    type="text"
                    placeholder="Current LTS Release"
                    required
                    value={currentLTSRelease}
                    onChange={(e) => setCurrentLTSRelease(e.target.value)}
                />

                <label>Supported Versions:</label>
                <input
                    type="text"
                    placeholder="Supported Versions"
                    required
                    value={supportedVersions}
                    onChange={(e) => setSupportedVersions(e.target.value)}
                />

                <label>Supported OS Versions:</label>
                <input
                    type="text"
                    placeholder="Supported OS Versions"
                    required
                    value={supportedOSVersions}
                    onChange={(e) => setSupportedOSVersions(e.target.value)}
                />

                <button>Add Middleware</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default AddMW
