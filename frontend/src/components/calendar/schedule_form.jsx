import React from "react"


class ScheduleForm extends React.Component {
    constructor(props) {
        super(props)

        // this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            title: "",
            start_time: Date.now(),
            end_time: Date.now(),
            student_id: this.props.user.id,
            teacher_id: this.props.user.id
        }
    }

    componentDidMount() {
        this.props.fetchUserEvents(this.props.user.id)
    }

    handleSubmit(e) {
        e.preventDefault();
        const event = Object.assign({}, this.state);
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

                    <label>Start Time:
                        <input type="date" value={this.state.start_time} onChange={this.update("start_time")} />
                    </label>

                    <label>End Time:
                        <input type="date" value={this.state.end_time} onChange={this.update("end_time")}/>
                    </label>
                    <input type="submit" value="Create Event" />
                </form>
            </div>
        )
    }
    
}

export default ScheduleForm;