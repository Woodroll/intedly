import { useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import './App.css';
import './Calendar.css'
import Calendar from "./components/calendar"

function App() {
  
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
      <Container fluid>
      <Row className="App-header">
        <Col><h1>Intedly</h1></Col>
      </Row>
        <Row>
          <Col><Calendar 
            currentMonth = {currentMonth}
            setCurrentMonth = {setCurrentMonth}
            selectedDate = {selectedDate}
            setSelectedDate = {setSelectedDate}
            /></Col>
          <Col>Info</Col>
        </Row>
      </Container>
  );
}

export default App;
