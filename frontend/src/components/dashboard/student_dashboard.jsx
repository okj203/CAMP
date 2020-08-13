import React from "react"
import {Link} from "react-router-dom"
import EventCalendar from "../calendar/calendar"

const StudentDash = ({user}) => {

    return(
        <div>
            <h1>{user.fname} {user.lname}'s Dashboard</h1>
            <h2>View Your Pending Lessons</h2>
            <ul>
                <li><Link to={"/lessons/1"}>Lesson 1</Link></li>
                <li><Link to={"/lessons/2"}>Lesson 2</Link></li>
                <li><Link to={"/lessons/3"}>Lesson 3</Link></li>
                <li><Link to={"/lessons/4"}>Lesson 4</Link></li>
                <li><Link to={"/lessons/5"}>Lesson 5</Link></li>
            </ul>
            <h2>{user.fname} {user.lname}'s Scheduled Classes</h2>
            <EventCalendar />
        </div>
    );
}

export default StudentDash;