import React, { useState } from "react";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Existing.css'

const Existing = () => {
    const [formData, setFormData] = useState({
        rfid: '',
        destination: 'gymnasium',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.rfid) newErrors.rfid = "RFID card ID is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            // No errors, submit the form
            console.log("Form submitted", formData);
            alert("Extension Form submitted successfully!");
            setSubmitted(true);
            // Optionally, send the form data to a backend server
            window.location.reload();
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="existing-visitor">
            <div className="go-back-container">
                <Link to='/visitor-registration' style={{ color: 'inherit', textDecoration: 'none' }}>
                    <button className='newVisitorBtn'>Go Back</button>
                </Link>            
            </div>
            <div className="container mt-5 existingContainer">
                <div className="evheader">
                    <div className="text">Visitor Journey Extension</div>
                    <div className="underline"></div>
                </div>
                <form onSubmit={handleSubmit} className="w-100">
                    <div className="evinputs">
                        <div className="form-group evinput">
                            <label htmlFor="rfid">RFID Card ID:</label>
                            <input
                                type="text"
                                id="rfid"
                                name="rfid"
                                className="form-control"
                                value={formData.rfid}
                                onChange={handleChange}
                            />
                            {errors.rfid && <div className="text-danger">{errors.rfid}</div>}
                        </div>
                        <div className="form-group evinput">
                            <label htmlFor="destination">Main Destination:</label>
                            <select
                                id="destination"
                                name="destination"
                                className="form-control"
                                value={formData.destination}
                                onChange={handleChange}
                            >
                                <option value="gymnasium">Gymnasium</option>
                                <option value="faculty">Faculty of IT</option>
                                <option value="lagaan">Lagaan</option>
                                <option value="wala">Wala Canteen</option>
                                <option value="sentra">Sentra Court</option>
                            </select>
                        </div>

                        {formData.destination === 'faculty' && (
                            <div className="form-group input">
                                <label htmlFor="subDestination">Sub Destination:</label>
                                <select
                                    id="subDestination"
                                    name="subDestination"
                                    className="form-control"
                                    value={formData.subDestination}
                                    onChange={handleChange}
                                >
                                    <option value="deanOffice">Dean's Office</option>
                                    <option value="ids">IDS Department</option>
                                    <option value="itd">IT Department</option>
                                    <option value="cm">CM Department</option>
                                    <option value="erp">ERP Lab</option>
                                </select>
                            </div>
                        )}
                    </div>

                    <div className="submit-container">
                        <button type="submit" className="submit btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Existing;
