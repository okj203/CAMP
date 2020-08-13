import React from "react"
import StudentDash from "./student_dashboard"
import TeacherDash from "./teacher_dashboard"

class Dashboard extends React.Component {

    componentDidMount() {
        this.props.fetchUserEvents(this.props.user.id)
    }

    render() {
        const { user, events} = this.props;
        if (this.props.user.accountType === "student") {
            return (
              <div>
                <StudentDash user={user} events={events} />
              </div>
            );
        }
        else {
            return(
                <div>
                    <TeacherDash user={user} events={events} />
                </div>
            ) 
        }

    }
}

export default Dashboard;

