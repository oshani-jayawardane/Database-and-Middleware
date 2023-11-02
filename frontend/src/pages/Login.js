import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    // State for username and password inputs
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const { username, password } = formData;

    const handleChange = (e) => {
        // Update the form data when input values change
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to your server's login endpoint with the username and password
            const response = await fetch('/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // If the login is successful, parse the token from the response
                const { token } = await response.json();

                // Store the token securely (e.g., in localStorage)
                localStorage.setItem('token', token);

                // Redirect to the admin page or another protected route
                console.log('Login successful');
                navigate('/admin');
            } else if (response.status === 401) {
                // Unauthorized - Display an error message
                console.error('Login failed: Invalid username or password');
            } else {
                // Handle other error cases
                console.error('Login failed: An error occurred');
            }
        } catch (error) {
            console.error('Error occurred during login:', error);
        }
    };

    return (
        <div>
            <form className="form-login" onSubmit={handleSubmit}>
                <h3>Login as Admin</h3>
                <label><p>Username</p></label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                />
                <label><p>Password</p></label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;