import React from "react"
// import {Link} from "react-router-dom"
import EventCalendar from "../calendar/calendar";

const TeacherDash = ({ user, events, defaultView, teacherId}) => {
    
    if (user[teacherId]) {
        const teacher = user[teacherId];
        return(
            <div>
                
                {/* <h1>{teacher.fname} {teacher.lname}'s Dashboard</h1> */}
                <h2>{teacher.fname} {teacher.lname}'s Scheduled Classes</h2>
                <EventCalendar events={events} defaultView={defaultView}  />
            </div>
        )
    } else {
        return(
            <div>
                <h1>{user.fname} {user.lname}'s Dashboard</h1>
                <EventCalendar user={user} events={events} defaultView={defaultView} />
            </div>
        )
    }
}

export default TeacherDash;