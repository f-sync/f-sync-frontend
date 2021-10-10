import React, { useState } from 'react'

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassowrd] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [displayError, setDisplayError] = useState(false);
    const [brand, setBrand] = useState(false)
    const [retail, setRetail] = useState(false)

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (password === verifyPassword) {
            setDisplayError(false)

            const data = {
                email: email,
                password: password,
                brand: brand
            };

            // const data = {
            //     email: email,
            //     password: password,
            //     retail: retail
            //   };

            console.log('data:', data)
            //Local Host, for example like: http://localhost:5000/api/login; andpoint 
            fetch('server', {
                method: 'POST',
                credentials: 'include',
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(response => {
                    // network failure, request prevented
                    if (response.status >= 200 && response.status < 300) {
                        return Promise.resolve(response);
                    }


                    return Promise.reject(new Error(response.statusText));
                })
                .then(response => response.json())
                .then(result => {
                    // custom error
                })
                .catch(error => {
                    // common error
                    return null;
                });

        } else {
            setDisplayError(true)
        }
    };

    // const toDisplay = {
    //     display: "none"
    // }

    return (
        <div className="App page_container">
            {/* <div className="login" style={{marginLeft: "2rem"}}> */}
            <h1 className="page_title">F-sync</h1>
            <p className="title_description">Welcome to F-Sync</p>
            <div className="loginform">
                <form onSubmit={handleSubmit}>
                    <div className="input-holder">
                        <label htmlFor="email" >
                            Email
                            <input id="email" name="email" value={email} onChange={evt => setEmail(evt.target.value)} />
                            {/* <button className="login" onClick = {()=>{LogIn(document.querySelector("#email_input").value)}}> what</button> */}
                        </label>
                    </div>
                    <div className="input-holder">
                        <label htmlFor="password">
                            Password
                            <input type="password" id="password" name="password" value={password} onChange={evt => setPassowrd(evt.target.value)} />
                        </label>
                    </div>
                    <div className="input-holder">
                        <label htmlFor="verifyPassword">
                            Verify Password
                            <input type="password" id="verifyPassword" name="verifyPassword" value={verifyPassword} onChange={evt => setVerifyPassword(evt.target.value)} />
                        </label>
                    </div>
                    <div className={displayError ? "showDisplay" : "hideDisplay"}>
                        <span>Password do not match.</span>
                    </div>
                    <div className="input-holder-checkbox">
                        <div className="brand">
                        <label htmlFor="brand">
                            Brand
                            <input type="checkbox" id="brand" name="brand" value={brand} onChange={evt => setBrand(evt.target.value)} />
                        </label>
                        </div>
                        <div className="retail">
                            <label htmlFor="retain">
                                Retail
                                <input type="checkbox" id="retail" name="retail" value={retail} onChange={evt => setRetail(evt.target.value)} />
                            </label>
                        </div>
                    </div>
                    
                    <button type="submit" >Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default LogIn
