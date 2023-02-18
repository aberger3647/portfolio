import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
          } else if (inputType === 'email') {
            setEmail(inputValue);
          } else {
            setMessage(inputValue);
          }
        };

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
    <div className="contact">
        <h1>Contact</h1>
        <form>
            <label for="name"><h3>Name</h3></label>
            <input type="text" id="name" name="name"></input>
            <label for="email"><h3>Email</h3></label>
            <input type="text" id="email" name="email"></input>
            <label for="message"><h3>Message</h3></label>
            <textarea name="message"></textarea>
            <div className="projlinks">
                <a  className="projlink">Submit</a>
           </div>
        </form>
    </div>

    )
};

export default Contact;
