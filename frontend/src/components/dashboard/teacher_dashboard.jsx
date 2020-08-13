import React from "react"
import {Link} from "react-router-dom"

const TeacherDash = ({user}) => {


    return(
        <div>
            <h1>{user.fname} {user.lname}'s Dashboard</h1>
            <h2>{user.fname} {user.lname}'s Scheduled Classes</h2>
        </div>
    );
}

export default TeacherDash;