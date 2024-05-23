import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./LogInSignUp.css";

export const LogInSignUp = () => {
    const [action, setAction] = useState("Log In");
    const [userNane, setUserNane] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8081/clients/insertClient", {
                userNane: userNane,
                email: email,
                password: password,
                address: address
            });
            alert("Client Registration Successfully");
            setUserNane("");
            setEmail("");
            setPassword("");
            setAddress("");
        } catch (err) {
            alert(err);
        }
    }

    async function login(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8081/clients/login", {
                email: email,
                password: password,
            });
             alert("Client Found!");
             navigate('/start');
            setUserNane("");
            setEmail("");
            setPassword("");
            setAddress("");
        } catch (err) {
            alert(err);
        }
    
    }

    return (
        <div className="container1">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Sign Up" && (
                    <div className="input">
                        <input
                            type="text"
                            placeholder="UserName"
                            value={userNane}
                            onChange={(event) => setUserNane(event.target.value)}
                        />
                    </div>
                )}
                <div className="input">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="input">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                {action === "Sign Up" && (
                    <div className="input">
                        <input
                            type="text"
                            placeholder="Address"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                        />
                    </div>
                )}
                <div className="submit-container">
                    {action === "Sign Up" ? (
                        <button className="submit" onClick={save}>Sign Up</button>
                    ) : (
                        <button className="submit" onClick={login}>Log In</button>
                    )}
                    <button className="submit" onClick={() => setAction(action === "Log In" ? "Sign Up" : "Log In")}>
                        {action === "Log In" ? "Sign Up" : "Log In"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogInSignUp;
