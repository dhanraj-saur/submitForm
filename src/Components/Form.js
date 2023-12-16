import React, { useState } from "react";

const Form = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handalClick = () => {


        if (!email || !password || !confirmPassword) {
            setError('All fields are mandatory');
            return;
        }

        if(password.length < 8){
            alert("Password should have minimum 8 character");
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        else {
            // setSuccess('Successful Signed Up!');
            alert('Successful Signed Up!')

        }
    }

    return (
        <div>

            <div>
                <form className="form">
                    <div className="form-input">
                        <label style={{ marginRight: "330px" }}>Email</label><br />
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                        <span style={{ color: "red" }}>Email is not valid</span><br />
                    </div><br />

                    <div className="form-input">
                        <label style={{ marginRight: "330px" }}>Password</label><br />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                        <span style={{ color: "red" }}>Password mus be 8 characters</span><br />
                    </div><br />


                    <div className="form-input">
                        <label > Confirm Password</label><br />
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br />
                    </div>
                </form>
            </div><br />

            <div className="btn">
                <button className="signUpBtn" onClick={handalClick}>SignUp</button>
            </div>


            {
                error &&
                <div className="error">{error}</div>
            }
            {
                success &&
                <div className="success">{success}</div>
            }
        </div>
    )
}

export default Form;