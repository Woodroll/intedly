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
  
  var list = [
    {'summary': 'Showing',
    'location': '800 Howard St., San Francisco, CA 94103',
    'description': 'A chance to hear more about Google\'s developer products.',
    'start': {
      'dateTime': '2021-03-28T09:00:00-07:00',
      'timeZone': 'America/Los_Angeles',
    },
    'end': {
      'dateTime': '2021-03-28T10:00:00-07:00',
      'timeZone': 'America/Los_Angeles',
    },
    'attendees': [
      {'email': 'lpage@example.com'},
      {'email': 'sbrin@example.com'},
    ],
    },

    {'summary': 'Showing',
    'location': '800 Howard St., San Francisco, CA 94103',
    'description': 'A chance to hear more about Google\'s developer products.',
    'start': {
      'dateTime': '2021-03-28T12:00:00-07:00',
      'timeZone': 'America/Los_Angeles',
    },
    'end': {
      'dateTime': '2015-05-28T14:00:00-07:00',
      'timeZone': 'America/Los_Angeles',
    },
    'attendees': [
      {'email': 'lpage@example.com'},
      {'email': 'sbrin@example.com'},
    ],
    },

    {
    'summary': 'Google I/O 2015',
    'location': '800 Howard St., San Francisco, CA 94103',
    'description': 'A chance to hear more about Google\'s developer products.',
    'start': {
      'dateTime': '2021-03-29T09:00:00-07:00',
      'timeZone': 'America/Los_Angeles',
    },
    'end': {
      'dateTime': '2021-05-29T17:00:00-07:00',
      'timeZone': 'America/Los_Angeles',
    },
    'attendees': [
      {'email': 'lpage@example.com'},
      {'email': 'sbrin@example.com'},
    ],
    },
  ];

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calEvents, setCalEvents] = useState(list);
  const [currentEvent, setCurrentEvent] = useState({});

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
            events = {calEvents}
            setCurrentEvent = {setCurrentEvent}
            currentEvent = {currentEvent}
            />
          </Col>
          <Col className="calendar" md={8} ><Calendar 
            currentMonth = {currentMonth}
            setCurrentMonth = {setCurrentMonth}
            selectedDate = {selectedDate}
            setSelectedDate = {setSelectedDate}
            list = {calEvents}
            setCurrentEvent = {setCurrentEvent}
            currentEvent = {currentEvent}
            />
          </Col>
        </Row>
  </Container>
  );
}

export default App;
