import React from "react";
import {Link} from "react-router-dom";
import EventCalendar from "../calendar/calendar";
import "./student_dashboard.scss";

const StudentDash = ({user, events, defaultView}) => {
    return(
        <div>
            <div className="student-nav">
                <h1 className="s-dashboard">{user.fname} {user.lname}'s Dashboard</h1>
                <h2 className="pending-lessons">View Your Pending Lessons</h2>
                <ul className="lessons-list">
                    <li><Link className="link-l" to={"/lessons/1"}>Lesson 1</Link></li>
                    <li><Link className="link-l" to={"/lessons/2"}>Lesson 2</Link></li>
                    <li><Link className="link-l" to={"/lessons/3"}>Lesson 3</Link></li>
                    <li><Link className="link-l" to={"/lessons/4"}>Lesson 4</Link></li>
                    <li><Link className="link-l" to={"/lessons/5"}>Lesson 5</Link></li>
                </ul>
            </div>
            <div className="calendar-container">
                <h2 className="student-scheduled">{user.fname} {user.lname}'s Scheduled Classes</h2>
                <EventCalendar events={events} defaultView={defaultView}  />
            </div>
        </div>
    );
}

export default StudentDash;