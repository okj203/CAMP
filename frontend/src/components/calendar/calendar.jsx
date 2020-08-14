import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "./calendar.scss";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const Schedule = withDragAndDrop(Calendar);

class EventCalendar extends React.Component {

  


  onEventResize = ({events}) => {
    // const { start_time, end_time } = events;
  };

  onEventDrop = (data) => {
    console.log(data);
  };

  render() {
    this.props.events.forEach(event => {
      event.start_time = new Date(event.start_time)
      event.end_time = new Date (event.end_time)
    });

    return (
      <div className="App">
        <Schedule
          defaultDate={moment().toDate()}
          defaultView={this.props.defaultView}
          events={this.props.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh" }}
          startAccessor="start_time"
          endAccessor="end_time"
        />
      </div>
    );
  }
}

export default EventCalendar;
