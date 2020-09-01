import React from "react"
import EventCalendar from "../calendar/calendar";

const TeacherDash = ({ user, events, defaultView, teacherId}) => {
    
    if (user[teacherId]) {
        const teacher = user[teacherId];
        return(
            <div className="scheduled-outer">
                <h2 className="scheduled">{teacher.fname} {teacher.lname}'s <br/> Scheduled Classes</h2>
                <EventCalendar events={events} defaultView={defaultView}  />
            </div>
        )
    } else {
        return(
            <div className="scheduled-outer">
                <h1 className="user-dashname">{user.fname} {user.lname}'s Dashboard</h1>
                <EventCalendar user={user} events={events} defaultView={defaultView} />
            </div>
        )
    }
}

export default TeacherDash;