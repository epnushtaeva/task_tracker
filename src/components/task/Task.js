import React from "react";
import moment from "moment"
import "./Task.css";
import {Draggable, Droppable} from 'react-beautiful-dnd';

export class Task extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    getDaysBeforeDeadline(dateTo){
        return  parseInt(Math.ceil(moment.duration(moment(dateTo, 'DD.MM.YYYY').diff(moment(moment(new Date()).format('DD.MM.YYYY'), 'DD.MM.YYYY').toDate())).asDays()));
    }

    getColor(task){
        if(task.dateTo && moment(this.props.task.dateTo, 'DD.MM.YYYY').toDate()>=moment(moment(new Date()).format('DD.MM.YYYY'), 'DD.MM.YYYY').toDate() && task.statusName!=='Завершено' && this.getDaysBeforeDeadline(task.dateTo) < 1){
            return "red lighten-3";
        }

        return  this.props.color;
    }

    render() {
        return (
            <Draggable draggableId={'task'+this.props.task.id} index={this.props.task.id}>
                {(provided) => (
                    <div className="col m12" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <div className={'card ' + this.getColor(this.props.task)}>
                            <div className="card-content">
                                <p>{this.props.task.shortDescription}</p>
                                {this.props.task.hoursCount > 0 &&
                                <div className="mt-1"><b>Оценка в часах:</b> {this.props.task.hoursCount}</div>}
                                {this.props.task.dateTo &&
                                <div className="mt-1"><b>Крайний срок:</b> {this.props.task.dateTo}</div>}
                                {this.props.task.dateTo && moment(this.props.task.dateTo, 'DD.MM.YYYY').toDate() >= moment(moment(new Date()).format('DD.MM.YYYY'), 'DD.MM.YYYY').toDate() &&
                                <div className="mt-1 deep-orange-text"><b>До дедлайна
                                    осталось:</b> {this.getDaysBeforeDeadline(this.props.task.dateTo)} дней</div>}
                            </div>
                            <div className="card-action">
                                <div className="row">
                                    <div className="col m7 mt-1">
                                        <b>Статус:</b> {this.props.task.statusName}
                                    </div>
                                    <div className="col m6 mt-1">
                                        <b>Приоритет:</b> {this.props.task.priority}
                                    </div>
                                    <div className="col m7 mt-1">
                                        <b>Автор:</b> {this.props.task.author}
                                    </div>
                                    <div className="col m8 mt-1">
                                        <b>Исполнитель:</b> {this.props.task.executor}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }
            </Draggable>
        );
    }
}