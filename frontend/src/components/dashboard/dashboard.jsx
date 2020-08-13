import React from "react"
// import {Link} from "react-router-dom"
import StudentDash from "./student_dashboard"
import TeacherDash from "./teacher_dashboard"
import ScheduleForm from "../calendar/schedule_form"

class Dashboard extends React.Component {

    componentDidMount() {
        debugger;
        this.props.fetchUserEvents(this.props.user.id)
    }

    render() {
        const { user, events, fetchNewEvent, fetchUserEvents} = this.props;
        if (this.props.user.accountType === "student") {
            return (
              <div>
                <StudentDash user={user} events={events} />
                <ScheduleForm user={user} fetchNewEvent={fetchNewEvent} fetchUserEvents={fetchUserEvents} />
              </div>
            );
        }
        else {
            return <TeacherDash user={user} />
        }

    }
}

export default Dashboard;

