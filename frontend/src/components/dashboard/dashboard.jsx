import React from "react"
import {Link} from "react-router-dom"
import StudentDash from "./student_dashboard"
import TeacherDash from "./teacher_dashboard"

class Dashboard extends React.Component {

    render() {
        const user = this.props.user
        // debugger
        if (this.props.user.accountType === "student") {
            return <StudentDash user={user} />
        }
        else {
            return <TeacherDash user={user} />
        }

    }
}

export default Dashboard;