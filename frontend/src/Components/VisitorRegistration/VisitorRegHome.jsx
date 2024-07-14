import React from 'react'
import './VisitorRegHome.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TransferIcon from '@mui/icons-material/TransferWithinAStation';

export default function VisitorRegHome() {
  return (
    <div className='regHome'>
      <Row className="pcard-container">
                    <Col sm={2} md={5}>
                        <CustomCard icon={<PersonAddIcon className="pcard-icon" fontSize='larger'/>} title=" New Visitor Registration" route='/new-visitor'> <br/>
                            Register new visitors to the system.Each time a visitor enters the university, this process has to be followed.
                        </CustomCard>
                    </Col>
                    <Col sm={2} md={5}>
                        <CustomCard icon={<TransferIcon className="pcard-icon" fontSize='larger' />} title="Existing Visitor Extention" route="/existing-visitor">
                        <br/>
                            Extending the journey of the visitors who hasn't left the university premises.
                        </CustomCard>
                    </Col>
        </Row>
    </div>
  )
}
const CustomCard = ({ icon, title, route, children }) => {
    return (
        <Card className="pcustom-card">
            <Card.Body className="d-flex flex-column align-items-center justify-content-between">
                <div className="text-center">
                    {icon}
                    <Card.Title className="mt-3"><b>{title}</b></Card.Title>
                    <Card.Text>{children}</Card.Text>
                </div>
                <Link to={route} className="btn btn-purple mt-2"><div className="dashboard-btn-text">Go to {title}</div></Link>
            </Card.Body>
        </Card>
    );
}
