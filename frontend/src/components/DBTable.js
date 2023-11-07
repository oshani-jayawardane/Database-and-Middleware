import { useState, useEffect } from 'react'

const DBTable = (database) => {

    const [databases, setDatabases] = useState(null)

    useEffect(() => {
        const fetchDatabases = async () => {
            const res = await fetch('/api/database') // add url in proxy - package.json
            const data = await res.json()

            if (res.ok) {
                setDatabases(data)
            }
        }

        fetchDatabases()
    }, [])

    const handleDelete = async (id, name) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete ${name}?`);
        if (confirmDelete) {
            try {
                const response = await fetch(`/api/database/${id}`, {
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
                        <th>DB Model</th>
                        <th>Secondary Models</th>
                        <th>Vendor</th>
                        <th>DB Flavors</th>
                        <th>Current LTS Release</th>
                        <th>Supported DB Versions</th>
                        <th>Supported OS Versions</th>
                        <th>Replication Tools</th>
                        <th>High Availability</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {databases && databases.map(database => (
                        <tr key={database._id}>
                            <td>{database.name}</td>
                            <td><img src={`${database.image}`} alt={`${database.name}`}/></td>
                            <td>{database.dbModel}</td>
                            <td>{database.secondaryModels.join(', ')}</td>
                            <td>{database.vendor}</td>
                            <td>{database.dbFlavors.join(' , ')}</td>
                            <td>{database.currentLTSRelease}</td>
                            <td>{database.supportedDBVersions}</td>
                            <td>{database.supportedOSVersions}</td>
                            <td>{database.ReplicationTools.join(' , ')}</td>
                            <td>{database.HighAvailability.join(' , ')}</td>
                            <td>
                                <button className="update-btn"><a href={`/admin/update-database/${database._id}`}>Update</a></button>
                                <button className="delete-btn" onClick={() => handleDelete(database._id, database.name)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DBTable