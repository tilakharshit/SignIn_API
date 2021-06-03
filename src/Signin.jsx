import React, { useState, useEffect } from 'react';
// import Table from './Table';
import './Signin.css';
import './index.css';
import { useHistory } from 'react-router-dom';



const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const history = useHistory();



    console.log("fetchin data=-------")

    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            console.log("in the history");

                // history.push("/Table")
        }
    }, [])


    console.log("heyyyyyyy");

    async function login(e) {
        e.preventDefault();
        console.log(email, password);

        try {
            let item = { email,password };

            let result = await fetch("https://dev-api.ownerandtenant.com/v1.0/auth/user/signin", {
            
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },

                body: JSON.stringify(item)
            })

            result = await result.json();
            console.log("line no 48");
            console.log(result);
            
            localStorage.setItem("user-info", JSON.stringify(result));
            
            if(result.status === 200){
                alert('sign in successfully');
                history.push("/Table");

            }
            else{
                alert('please fill the correct data');
            }

        }
        catch (error) {
            console.log(`the error is : ${error}`);
        }
    }



    return (
        <>
            <div className="signup">
                <form className="form_signup">
                    <h1>Sign In</h1>

                    <input type="email" placeholder="enter your email"
                        value={email}

                        onChange={(e) => setEmail(e.target.value)}>
                    </input>

                    <input type="password" placeholder="password"
                        value={password}

                        onChange={(e) => setPass(e.target.value)}>
                    </input>

                    <button className='btn' onClick={login}>SIGN IN</button>

                </form>
            </div>
        </>
    )
}

export default Signin;


