import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { BsFillPersonFill, BsClockFill, BsQuestionCircleFill, BsMapFill, BsFillPeopleFill, BsFillFlagFill } from "react-icons/bs";
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div>
            <div className="dashboard-content">
                <h1 className="text-center mt-4 dashboard-heading">Dashboard</h1>

                <Row className="card-container">
                    <Col sm={6} md={3}>
                        <CustomCard icon={<BsFillPersonFill className="card-icon" />} title="Visitor Registration" route='/visitor-registration'>
                            Register new visitors to the system.
                        </CustomCard>
                    </Col>
                    <Col sm={6} md={3}>
                        <CustomCard icon={<BsClockFill className="card-icon" />} title="Visitor History" route="/visitor-history">
                            View past visitor records.
                        </CustomCard>
                    </Col>
                    <Col sm={6} md={3}>
                        <CustomCard icon={<BsQuestionCircleFill className="card-icon" />} title="How to Use" route="/how-to-use">
                            Learn how to use the system.
                        </CustomCard>
                    </Col>
                    <Col sm={6} md={3}>
                        <CustomCard icon={<BsMapFill className="card-icon" />} title="Add a Map" route="/add-map">
                            Add and manage maps.
                        </CustomCard>
                    </Col>
                </Row>
                <Row className="topic"><h2 className="topic-font">Visitor Stats of the Day!</h2></Row>
                <Row className="card-container mt-4 stats">
                    <Col sm={6} md={5}>
                        <CountCard icon={<BsFillPeopleFill className="stats" />} title="Visitors Guided" count={10} />
                    </Col>
                    <Col sm={6} md={5}>
                        <CountCard icon={<BsFillFlagFill className="stats" />} title="Destinations Reached" count={8} />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

const CustomCard = ({ icon, title, route, children }) => {
    return (
        <Card className="custom-card">
            <Card.Body className="d-flex flex-column align-items-center justify-content-between">
                <div className="text-center">
                    {icon}
                    <Card.Title className="mt-3">{title}</Card.Title>
                    <Card.Text>{children}</Card.Text>
                </div>
                <Link to={route} className="btn btn-purple mt-2"><div className="dashboard-btn-text">Go to {title}</div></Link>
            </Card.Body>
        </Card>
    );
}

const CountCard = ({ icon, title, count }) => {
    const [currentCount, setCurrentCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = count;
        const duration = 500; 
        const incrementTime = 50; 

        if (start === end) return;

        const stepTime = Math.abs(Math.floor(duration / (end - start)));
        let timer = setInterval(() => {
            start += Math.ceil(end / (duration / incrementTime));
            if (start > end) {
                clearInterval(timer);
                start = end;
            }
            setCurrentCount(start);
        }, stepTime);

        return () => clearInterval(timer);
    }, [count]);

    return (
        <>
        <Card className="custom-card stats-card">
            <Card.Body className="d-flex flex-column align-items-center justify-content-between">
                <div className="text-center">
                    {icon}
                    <Card.Title className="mt-3">{title}</Card.Title>
                    <Card.Text>{currentCount}</Card.Text>
                </div>
            </Card.Body>
        </Card>
        </>
    );
}

export default Dashboard;
