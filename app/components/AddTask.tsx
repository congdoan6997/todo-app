import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
const AddTask = () => {
  return (
    <div>
      <button className="btn btn-primary w-full">
        Add new Task
        <AiOutlinePlus size={16} className="ml-2" />
      </button>
    </div>
  );
};

export default AddTask;
