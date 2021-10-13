import React from 'react';
import './index.scss';

const Contact = () => {
    return (
        <div className="contact">
            <form>
                <h2>Contact me</h2>
                <div>
                    <input type="text" name="name" placeholder="name" />
                    <input type="email" name="email" placeholder="email" />
                </div>
                <input type="text" name="subject" placeholder="subject" />
                <textarea placeholder="Message" name="message" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Contact;