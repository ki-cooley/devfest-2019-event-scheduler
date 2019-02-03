import "react-big-calendar/lib/css/react-big-calendar.css";
import React from "react";
import moment from 'moment';

//COMPONENTS
import BigCalendar from 'react-big-calendar';
import TopBar from "../TopBar";

//DATA
const localizer = BigCalendar.momentLocalizer(moment);
// const myEventsList = {
//   one: {
//     title: "My event one",
//     start: Date.now(),
//     end: Date.now(),
//   }
// }
/**
 * Event {
    title: string,
    start: Date,
    end: Date,
    allDay?: boolean
    resource?: any,
  }
  */

class Calendar extends React.Component {
  render() {
    return (
      <div>
        <TopBar />
        <BigCalendar
          localizer={localizer}
          events={[]}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    );
  }
}

export default Calendar;