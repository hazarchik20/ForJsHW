import React, { useState } from 'react'
import "./UserProfileForm.css"

const UserProfileForm = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("");

    const clearForm = () => {
        setName("");
        setAge("");
        setCountry("");
    };
    const render = () => {
        let returnStr = ""
        if (name) {
            returnStr += `Hello, ${name} `
            if (country) {
                returnStr += `from ${country}! `
                if (age) {
                    returnStr += `You are ${age} years old.`
                }
            }
        }
        return returnStr;
    }

    return (
        <div className='form-wrapper'>
            <div className="input-wrapper">
                <label>Name:</label>
                <input type="text" name='name' className="input" value={name} onChange={(e) => setName(e.target.value)} required />
                <p className="text">Name:{name || ""}</p>

            </div>

            <div className="input-wrapper">
                <label>Age:</label>
                <input  type="number" name='age' className="input" value={age} onChange={(e) => setAge(e.target.value)}  required />
                <p className="text">Age:{age || ""}</p>
            </div>

            <div className="input-wrapper">
                <label>Country:</label>
                <select value={country} onChange={(e) => setCountry(e.target.value)}>
                    <option value="">Select...</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="Poland">Poland</option>
                    <option value="USA">USA</option>
                    <option value="Germany">Germany</option>
                    <option value="Italy">Italy</option>
                </select>
                <p className="text"> Country: {country || ""}</p>
            </div>

            <button className="clear-btn" onClick={clearForm}>
                Clear Form
            </button>

            <div className="summary-box">
                <h3>Summary:</h3>
                <p>
                    {render()}
                </p>
            </div>
        </div>
    )
}

export default UserProfileForm