import React, {useState} from 'react';
import {format} from "date-fns";
import EventButton from './EventButton';

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

const EventsList = (props) => {
    const { events, currentMonth, setCurrentMonth, selectedDate, 
      setCurrentEvent, currentEvent, setSelectedDate } = props;
    const dateFormat = "cccc, MMMM dd, yyyy";
    return (
      <>
      <h2>{format(selectedDate, dateFormat)}</h2>
      <ul className="calendar-dates">
        {events.map( item =>
            <li className="event">
          <h2>{item.summary}</h2>
        </li>
        )}
      </ul>
      {currentEvent? (
      <div>  
      <h2>Current Event:</h2>
      <p>{currentEvent?.description}</p>
      </div>
      ):<p>Click an event.</p>}
      </>
    )
}

export default EventsList;
