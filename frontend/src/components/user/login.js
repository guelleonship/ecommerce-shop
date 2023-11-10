import { useState } from 'react'

const Login = () => {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const handleLogin = () => {

        fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => {
            if (response.ok) {
                console.log("Login successful")   
            } else {
                console.log("Login Error")                    
            }
        })
        .catch(error => console.log(error))

    }

    return (
        <div>
            <h2>Log In</h2>
            <input
                type="text"
                placeholder='username'
                value={username}
                onChange={(e) => setusername(e.target.value)}
            />
            <input
                type="text"
                placeholder='password'
                value={password}
                onChange={(e) => setpassword(e.target.value)}
            />
            <button onClick={handleLogin}> Log In </button>
        </div>
    )

}

export default Login