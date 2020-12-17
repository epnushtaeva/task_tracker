const tasksReducer = function ( state = [
    {
        id:1,
        shortDescription: 'Задача 1',
        hoursCount: -1,
        statusName: 'Не выполнялась',
        priority: 'Высокий',
        author: 'Нуштаева Е. П.',
        executor: 'Нуштаева Е. П.'
    },
    {
        id:2,
        shortDescription: 'Задача 2',
        hoursCount: 3,
        statusName: 'В работе',
        priority: 'Высокий',
        author: 'Нуштаева Е. П.',
        executor: 'Нуштаева Е. П.'
    },
    {
        id:3,
        shortDescription: 'Задача 3',
        hoursCount: 3,
        dateTo: '14.12.2020',
        statusName: 'В работе',
        priority: 'Высокий',
        author: 'Нуштаева Е. П.',
        executor: 'Нуштаева Е. П.'
    },
    {
        id:4,
        shortDescription: 'Задача 4',
        hoursCount: -1,
        statusName: 'Выполнено',
        priority: 'Высокий',
        author: 'Нуштаева Е. П.',
        executor: 'Нуштаева Е. П.'
    }
], action) {
    if(!action){
        return state;
    }

    switch (action.type) {
        case "SET_TASK_STATUS":
            state.forEach(task=>{
                if(task.id === parseInt(action.taskId)){
                    task.statusName = action.statusName;
                }
            });
            console.log(state);
            return state;
        case "ADD_TASK":
            return state;
        case "EDIT_TASK":
            return state;
        case "DELETE_TASK":
            return state;
        default:
            return state;
    }
};

export default tasksReducer