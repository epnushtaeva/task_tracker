import React from "react";
import "./TaskList.css";
import Task from "../../components/task/";
import tasksReducer from "../../store/tasks";
import {Draggable, Droppable} from "react-beautiful-dnd";

export class TaskList extends React.Component {
    constructor(props) {
        super(props);

        let colors = ['indigo lighten-5','purple accent-1','pink lighten-3'];
        this.state = {};
        this.color = colors[parseInt(Math.ceil(Math.random() * 2))];

        console.log(this.color);
    }

    render() {
        return (
            <Droppable droppableId={this.props.tasksStatusName} droppableProps={this.props.tasks}>
                {(provided) => (
            <div className="col m4 tasks-col" {...provided.droppableProps} ref={provided.innerRef}>
                <h4>{this.props.tasksStatusName}</h4>
                {this.props.tasks.filter(task=>task.statusName==this.props.tasksStatusName).map((task) => {
                    return (<Task task={task} color={this.color} key={task.id} />)
                            })}
                {provided.placeholder}
            </div>
                    )}
            </Droppable>
        );
    }
}