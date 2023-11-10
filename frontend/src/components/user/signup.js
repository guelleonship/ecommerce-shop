import { useState } from 'react'

const Signup = () => {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const handleSignup = () => {
        
        fetch('http://localhost:3000/api/users/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password
            })
        }) 
        .then(response => {
            if (response.ok) {
                console.log("Registration successful")   
            } else {
                console.log("Registration Error")                    
            }
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <h2> Sign Up </h2>
            <input
                type="text"
                name='username'
                placeholder='username'
                value={username}
                onChange={(e) => setusername(e.target.value)}
            />
            <input
                type="text"
                name='password'
                placeholder='password'
                value={password}
                onChange={(e) => setpassword(e.target.value)}
            />
            <button onClick={handleSignup}> Sign Up </button>
        </div>
    )

}

export default Signup