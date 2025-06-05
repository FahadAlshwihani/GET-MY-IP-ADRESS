import React, { useState, useEffect } from 'react';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Support = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [issueDescription, setIssueDescription] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        emailjs.init('YOUR_EMAILJS_USER_ID');
    }, []);

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleTextareaChange = (e) => {
        setIssueDescription(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const getPlaceholderText = () => {
        if (selectedOption === 'Other' || selectedOption === 'Feedback/Suggestions') {
            return 'Tell us what you think about...';
        } else {
            return 'Tell us about your issue';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedOption || !issueDescription.trim() || !email || !name) {
            toast.error('Please fill in all fields.');
            return;
        }

        const trimmedEmail = email.trim();

        const supportEmailParams = {
            option: selectedOption,
            message: issueDescription,
            email: trimmedEmail,
            to_email: 'YOUR_SUPPORT_EMAIL',
        };

        const autoReplyParams = {
            email: trimmedEmail,
            name: name,
            reply_message: "Thank you for contacting us! We've received your message.",
        };

        try {
            await emailjs.send('YOUR_EMAILJS_SERVICE_ID', 'YOUR_SUPPORT_TEMPLATE_ID', supportEmailParams);
            await emailjs.send('YOUR_EMAILJS_SERVICE_ID', 'YOUR_AUTO_REPLY_TEMPLATE_ID', autoReplyParams);
            toast.success('The ticket has been received!');
            setSelectedOption('');
            setIssueDescription('');
            setEmail('');
            setName('');
        } catch (error) {
            console.error('Email send failed:', error);
            toast.error('Failed to send email, please try again later.');
        }
    };

    return (
        <>
            <ToastContainer />
            <header>
                <Header />
            </header>

            <main>
                <div className="container">
                    <div className="row-sm-9 mt-3 d-flex justify-content-center">
                        <div className="col">
                            <div className="card rounded">
                                <div className="card-header rounded">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-2">
                                            <label htmlFor="nameInput" className="form-label">Your Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="nameInput"
                                                placeholder="Your Name"
                                                value={name}
                                                onChange={handleNameChange}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="emailInput" className="form-label">Your Email address</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="emailInput"
                                                placeholder="name@example.com"
                                                value={email}
                                                onChange={handleEmailChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <select
                                                className="form-select form-select-sm"
                                                aria-label="Small select example"
                                                value={selectedOption}
                                                onChange={handleSelectChange}
                                                required
                                            >
                                                <option value="" disabled>Select...</option>
                                                <option value="Technical Issue">Technical Issue</option>
                                                <option value="Feedback/Suggestions">Feedback/Suggestions</option>
                                                <option value="General Inquiry">General Inquiry</option>
                                                <option value="Privacy Concerns">Privacy Concerns</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="issueTextarea" className="form-label"></label>
                                            <textarea
                                                className="form-control"
                                                id="issueTextarea"
                                                rows="3"
                                                placeholder={getPlaceholderText()}
                                                value={issueDescription}
                                                onChange={handleTextareaChange}
                                                required
                                            ></textarea>
                                        </div>
                                        <div className='d-flex justify-content-center'>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default Support;