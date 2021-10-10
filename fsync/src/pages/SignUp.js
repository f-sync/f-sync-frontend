import React, { useState } from 'react'

function SignUp() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [companyAddress, setCompanyAddress] = useState('')
    const [companyEmail, setCompanyEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [verifyPassword, setVerifyPassword] = useState('')
    const [termsCondition, setTermsCondition] = useState(null)
    const [privacyPolicy, setPrivacyPolicy] = useState(null)
    const [displayError, setDisplayError] = useState(false);
    const [brand, setBrand] = useState(false)
    const [retail, setRetail] = useState(false)

    const handleSubmit = (evt) => {
        evt.preventDefault()
        if (password === verifyPassword ) {
            setDisplayError(false)
            const data = {
                firstName,
                lastName,
                companyName,
                companyAddress,
                companyEmail,
                phoneNumber,
                password,
                termsCondition,
                privacyPolicy
            }
            console.log('signup data: ', data);

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
        

      }

    return (
        <div className="App page_container">
            <h1 className="page_title">F-sync</h1>
            <div className="signupform">
                <form onSubmit={handleSubmit}>
                    <div className="firstname-holder input-holder">
                        <label htmlFor="firstName">
                            First Name
                            <input type="text" name="firstName" id="firstName" value={firstName} onChange={evt => setFirstName(evt.target.value)} />
                        </label>
                    </div>
                    <div className="lastname-holder input-holder">
                        <label htmlFor="lastName">
                            Last Name
                            <input type="text" name="lastName" id="lastName" value={lastName} onChange={evt => setLastName(evt.target.value)} />
                        </label>
                    </div>
                    <div className="companyname-holder input-holder">
                        <label htmlFor="companyName">
                            Company Name
                            <input type="text" name="companyName" id="companyName" value={companyName} onChange={evt => setCompanyName(evt.target.value)} />
                        </label>
                    </div>
                    <div className="companysddress-holder input-holder">
                        <label htmlFor="companyAddress">
                            Company Address
                            <input type="text" name="companyAddress" id="companyAddress" value={companyAddress} onChange={evt => setCompanyAddress(evt.target.value)} />
                        </label>
                    </div>
                    <div className="companyemail-holder input-holder">
                        <label htmlFor="companyEmail">
                            Company Email
                            <input type="text" name="companyEmail" id="companyEmail" value={companyEmail} onChange={evt => setCompanyEmail(evt.target.value)} />
                        </label>
                    </div>
                    <div className="phonenumber-holder input-holder">
                        <label htmlFor="phoneNumber">
                            Phone Number
                            <input type="text" name="phoneNumber" id="phoneNumber" value={phoneNumber} onChange={evt => setPhoneNumber(evt.target.value)} />
                        </label>
                    </div>
                    <div className="password-holder input-holder">
                        <label htmlFor="password">
                            Password
                            <input type="password" name="password" id="password" value={password} onChange={evt => setPassword(evt.target.value)} />
                        </label>
                    </div>
                    <div className="verifypassword-holder input-holder">
                        <label htmlFor="verifyPassword">
                            
                            Confirm Password
                            <input type="password" name="verifyPassword" id="verifyPassword" value={verifyPassword} onChange={evt => setVerifyPassword(evt.target.value)} />
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
                    <button className="signup-button" type="submit">Sign Up</button>
                    <div className="terms-conditions">
                        <input type="checkbox" name="termsCondition" id="termsCondition" value="true" onChange={evt => setTermsCondition(evt.target.value)} />
                        I agree to F-sync terms and conditions
                    </div>
                    <div className="privacy-policy">
                        <input type="checkbox" name="privacyPolicy" id="privacyPolicy" value="true" onChange={evt => setPrivacyPolicy(evt.target.value)} />
                        I agree to F-sync terms and conditions
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp


