import React from "react"


class ScheduleForm extends React.Component {
    constructor(props) {
        super(props)

        // this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            title: "",
            date: Date.now(),
            start_time: Date.now(),
            end_time: Date.now(),
            student_id: this.props.currentUser.id,
            teacher_id: this.props.teacherId
        }
    }



    handleSubmit(e) {
        e.preventDefault();
        const event = Object.assign({}, this.state);
        event.start_time = new Date(event.date + "T" + event.start_time);
        event.end_time = new Date(event.date + "T" + event.end_time);
        this.props.fetchNewEvent(event);
    }

    update(field) {
       return (e) => this.setState({ [field]: e.target.value });
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:
                        <input type="text" value={this.state.title} onChange={this.update("title")}/>
                    </label>

                    <label>Date:
                        <input type="Date" value={this.state.date} onChange={this.update("date")}/>
                    </label>

                    <label>Start Time:
                        <input type="time" value={this.state.start_time} onChange={this.update("start_time")} />
                    </label>

                    <label>End Time:
                        <input type="time" value={this.state.end_time} onChange={this.update("end_time")}/>
                    </label>

                    <input type="submit" value="Create Event" />
                </form>
            </div>
        )
    }
    
}

export default ScheduleForm;