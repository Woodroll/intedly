import { useState } from 'react';
import './App.css';
import './Calendar.css';
import Calendar from "./components/calendar";
import EventsList from './components/eventlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calEvents, setCalEvents] = useState();



  return (
      <Container fluid>
      <Row className="App-header">
        <Col><h1>Intedly</h1></Col>
      </Row>
        <Row className="justify-content-md-center">
          <Col md={4} ><EventsList
            currentMonth = {currentMonth}
            setCurrentMonth = {setCurrentMonth}
            selectedDate = {selectedDate}
            setSelectedDate = {setSelectedDate}
            />
          </Col>
          <Col className="calendar" md={8} ><Calendar 
            currentMonth = {currentMonth}
            setCurrentMonth = {setCurrentMonth}
            selectedDate = {selectedDate}
            setSelectedDate = {setSelectedDate}
            />
          </Col>
        </Row>
        
    <Row className="justify-content-md-center">
    <Col xs lg="2">
      1 of 3
    </Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>

  </Container>
  );
}

export default App;
