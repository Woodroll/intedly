import React from "react";
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import {format} from 'date-fns';

const EventButton = (props) => {
    const {setCurrentEvent} = props
    
    const calEvent = props.event;
    const {summary, description, start, end} = calEvent
    const dateFormatPopover = "cccc, MMMM dd, yyyy";
    console.log(typeof props.event)
    
    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">{summary}</Popover.Title>
          <Popover.Content>
            {`Start: ${format(new Date(start.dateTime), dateFormatPopover)} /\n
            End: ${format (new Date(end.dateTime), dateFormatPopover)} /\n
            Description: ${description}`}
          </Popover.Content>
        </Popover>
      );
    
    
    return (
            <OverlayTrigger trigger="focus" placement="right" overlay={popover}>
            <Button onClick={() => setCurrentEvent(calEvent)} variant="success">🏠</Button>
            </OverlayTrigger>
    )
}

export default EventButton;