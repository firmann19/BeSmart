/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';

export default function Contact() {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    // Function to handle form submissions
    const handleSubmit = (event) => {
        event.preventDefault();

        // Send the form values to the backend to be sent as an email
        fetch('/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    };

    // Function to handle form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };
    return (
        <main>
            <section className='container'>
                <div className="contact-us-desk">
                    <h1>Contact Us</h1>
                    <p>Silahkan hubungi kami apabila ada kendala atau sesuatu hal yang ingin ditanyakan seputar BeSmart dan <br /> layanan yang kami berikan</p>
                </div>
                <div className="row">
                    <div className="left-column">
                        <form onSubmit={handleSubmit}>
                            <div className="form-name">
                                <div className="firstname">
                                    <label htmlFor="first-Name">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formValues.firstName}
                                        onChange={handleChange}
                                        style={{
                                            border: 'none',
                                            outline: 'none',
                                            borderBottom: '2px solid black',
                                            width: '100%',
                                            background: 'transparent',
                                        }}
                                    />
                                </div>
                                <br />
                                <div className="lastname">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formValues.lastName}
                                        onChange={handleChange}
                                        style={{
                                            border: 'none',
                                            outline: 'none',
                                            borderBottom: '2px solid black',
                                            width: '100%',
                                            background: 'transparent',
                                        }}
                                    />
                                </div>
                            </div>
                            <br />
                            <div className="email-phone">
                                <div className="email">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formValues.email}
                                        onChange={handleChange}
                                        style={{
                                            border: 'none',
                                            outline: 'none',
                                            borderBottom: '2px solid black',
                                            width: '100%',
                                            background: 'transparent',
                                        }}
                                    />
                                </div>
                                <br />
                                <div className="phone">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        value={formValues.phone}
                                        onChange={handleChange}
                                        style={{
                                            border: 'none',
                                            outline: 'none',
                                            borderBottom: '2px solid black',
                                            width: '100%',
                                            background: 'transparent',
                                        }}
                                    />
                                </div>
                            </div>
                            <br />
                            <div className="message">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formValues.message}
                                    onChange={handleChange}
                                    style={{
                                        border: 'none',
                                        outline: 'none',
                                        borderBottom: '2px solid black',
                                        width: '100%',
                                        background: 'transparent',
                                    }}
                                />
                            </div>
                            <br />
                            <button className='btn-submit' type='submit'>Send Message</button>
                        </form>
                    </div>
                    <div className="right-column">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.295568288184!2d106.9231592141205!3d-6.257094995526262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3cb2c68cd45%3A0x6b8cf7b1f707e4f6!2sUniversitas%20Raharja!5e0!3m2!1sen!2sid!4v1617709513207!5m2!1sen!2sid"
                            width="506"
                            height="345"
                            frameBorder="0"
                            style={{ border: '0' }}
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex="0"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}
