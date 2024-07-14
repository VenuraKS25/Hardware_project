import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Register.css';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        rfid: '',
        fname: '',
        lname: '',
        nic: '',
        mobile: '',
        address: '',
        destinationId: '',
        destination: '',
        subDestinationId: '',
        subDestination: '',
        purpose: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:4000');

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.RFID) {
                setFormData(prevData => ({ ...prevData, rfid: data.RFID }));
            }
        };

        ws.onerror = (err) => {
            console.error('WebSocket error:', err);
        };

        return () => {
            ws.close();
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        // Simple client-side validation
        const nicReg = /^\d{12}$/;
        const phoneReg = /^\d{10}$/;
        if (!nicReg.test(formData.nic)) {
            setError("Invalid NIC number. Must be 12 digits.");
            return;
        }
        if (!phoneReg.test(formData.mobile)) {
            setError("Invalid contact number. Must be 10 digits.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:4000/Usignup', formData);
            setMessage(response.data.message);
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred. Please check the console.");
            console.error(err);
        }
    };

    return (
        <div className="container">
            <br /><br /><br /><br /><br />
            <h2>Sign Up Form</h2>
            <br />
            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit} className="form">
                <div className="form-item">
                    <label className="label">
                        RFID Code:
                        <input
                            type="text"
                            name="rfid"
                            value={formData.rfid}
                            onChange={handleChange}
                            required
                            className="input"
                        />
                    </label>
                </div>
                <div className="form-item">
                    <label className="label">
                        Destination ID:
                        <select
                            name="destinationId"
                            value={formData.destinationId}
                            onChange={handleChange}
                            required
                            className="select"
                        >
                            <option value="">Select Destination ID</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>
                </div>
                <div className="form-item">
                    <label className="label">
                        Destination:
                        <select
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            required
                            className="select"
                        >
                            <option value="">Select Destination</option>
                            <option value="Destination A">Faculty of IT</option>
                            <option value="Destination B">Goda canteen</option>
                            <option value="Destination C">Civil department</option>
                        </select>
                    </label>
                </div>
                <div className="form-item">
                    <label className="label">
                        Sub Destination ID:
                        <select
                            name="subDestinationId"
                            value={formData.subDestinationId}
                            onChange={handleChange}
                            required
                            className="select"
                        >
                            <option value="">Select Sub Destination ID</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </label>
                </div>
                <div className="form-item">
                    <label className="label">
                        Sub Destination:
                        <select
                            name="subDestination"
                            value={formData.subDestination}
                            onChange={handleChange}
                            required
                            className="select"
                        >
                            <option value="">Select Sub Destination</option>
                            <option value="Sub Destination A">Sub Destination A</option>
                            <option value="Sub Destination B">Sub Destination B</option>
                            <option value="Sub Destination C">Sub Destination C</option>
                        </select>
                    </label>
                </div>
                {Object.keys(formData).map((field) => (
                    !['rfid', 'destinationId', 'destination', 'subDestinationId', 'subDestination'].includes(field) && (
                        <div key={field} className="form-item">
                            <label className="label">
                                {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}:
                                {field === 'address' ? (
                                    <textarea
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        required={field !== 'subDestination'}
                                        className="textarea"
                                    />
                                ) : (
                                    <input
                                        type="text"
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        required={field !== 'subDestination'}
                                        className="input"
                                    />
                                )}
                            </label>
                        </div>
                    )
                ))}
                <button type="submit" className='save-button'>
                    Save
                </button>
            </form>
        </div>
    );
};

export default SignupForm;
