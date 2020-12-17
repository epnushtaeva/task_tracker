import React from "react";
import "./AllTasksPage.css";
import TaskBoard from "../../components/task_board";
import tasksReducer from "../../store/tasks";
import store from "../../store/store";

export class AllTasksPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {tasks} = store.getState();
        return (
            <div className="row">
           <TaskBoard tasks={tasks}/>
            </div>
        );
    }
}