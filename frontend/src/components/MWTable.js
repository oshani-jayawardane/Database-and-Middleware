import { useState, useEffect } from 'react'

const MWTable = (middleware) => {

    const [middlewares, setMiddleware] = useState(null)

    useEffect(() => {
        const fetchMiddlewares = async () => {
            const res = await fetch('/api/middleware') // add url in proxy - package.json
            const data = await res.json()

            if (res.ok) {
                setMiddleware(data)
            }
        }

        fetchMiddlewares()
    }, [])

    const handleDelete = async (id, name) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete ${name}?`);
        if (confirmDelete) {
            try {
                const response = await fetch(`/api/middleware/${id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    // Successfully deleted, you can update the UI as needed - For example, remove the deleted entry from the state
                    window.location.reload();
                    console.log(`${name} Deleted successfully`);
                } else {
                    console.error('Delete request failed');
                }
            } catch (error) {
                console.error('Error occurred while deleting:', error);
            }
        }
    }

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Vendor</th>
                        <th>Editions</th>
                        <th>Current LTS Release</th>
                        <th>Supported Versions</th>
                        <th>Supported OS Versions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {middlewares && middlewares.map(middleware => (
                        <tr key={middleware._id}>
                            <td>{middleware.name}</td>
                            <td><img src={`${middleware.image}`} alt={`${middleware.name}`} /></td>
                            <td>{middleware.vendor}</td>
                            <td>{middleware.editions.join(' , ')}</td>
                            <td>{middleware.currentLTSRelease}</td>
                            <td>{middleware.supportedVersions}</td>
                            <td>{middleware.supportedOSVersions}</td>
                            <td>
                                <button className="update-btn"><a href={`/admin/update-middleware/${middleware._id}`}>Update</a></button>
                                <button className="delete-btn" onClick={() => handleDelete(middleware._id, middleware.name)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MWTable