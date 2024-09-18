import { ITask } from "../interfaces";

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
    return (
     <div className="task">
        <div className="content">
        <span>{task.taskName}</span> 
        <span>{task.deadLine}</span>
        </div>
        <button onClick={() => {completeTask(task.taskName)}} className="btn">Delete</button>
     </div>
    );
}

export default TodoTask;