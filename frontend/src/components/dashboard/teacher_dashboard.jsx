import React from "react"
// import {Link} from "react-router-dom"
import EventCalendar from "../calendar/calendar";

const TeacherDash = ({user, events, defaultView}) => {


    return(
        <div>
            <h1>{user.fname} {user.lname}'s Dashboard</h1>
            <h2>{user.fname} {user.lname}'s Scheduled Classes</h2>
            <EventCalendar events={events} defaultView={defaultView}  />
        </div>
    );
}

export default TeacherDash;