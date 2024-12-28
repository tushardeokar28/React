import { useState } from "react";

export default function Index(){

    const [userName, setUserName] = useState('');
    const [error, setError] = useState('');

    const validateUsername = (e) => {
        e.preventDefault();

        if(!userName){
            setError("Usrname required");
            return;
        }

        setError("");
    }

    return(
        <div>
            <h1>Login</h1>

            <form onSubmit={validateUsername}>
                <label>Username</label>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter Username"/>
                <span>{error}</span>
                <button type="submit">Login</button>
            </form>


        </div>
    );
}