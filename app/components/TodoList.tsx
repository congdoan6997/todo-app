import { ITask } from "@/types/task";
import React from "react";
import Task from "./Task";
interface TodoListPros {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListPros> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {tasks.map((ta) => (
            <Task task={ta}></Task>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
