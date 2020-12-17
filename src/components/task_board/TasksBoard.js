import React from "react";
import "./TaskBoard.css";
import TaskList from "../../components/task_list";
import {DragDropContext} from "react-beautiful-dnd";
import tasksReducer from "../../store/tasks";
import store from "../../store/store";

export class TasksBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    getTaskStatuses(){
        let taskStatuses = [];

        this.props.tasks.forEach(function(task){
           if(!taskStatuses.includes(task.statusName)){
               taskStatuses.push(task.statusName);
           }
        });

        return taskStatuses;
    }

    onDragEnd(evt){
        console.log(evt);
        store.dispatch({type: 'SET_TASK_STATUS', taskId:evt.draggableId.replace('task',''), statusName: evt.destination.droppableId});
    }

    render() {
        return <DragDropContext onDragEnd={this.onDragEnd}><div className="col m12 offset-m2 all-tasks-col"><div className="row tasks-board">
            {this.getTaskStatuses().map((taskStatus) => {
                return (<TaskList key={taskStatus} tasksStatusName={taskStatus} tasks={this.props.tasks}/>)
            })}
        </div>
        </div></DragDropContext>
    }
}