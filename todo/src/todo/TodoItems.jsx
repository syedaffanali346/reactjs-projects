import React from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoItems = ({data, checked, onHandleDeleteBtn, onHandlecheckedTodo}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={()=> onHandlecheckedTodo(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onHandleDeleteBtn(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};

export default TodoItems;
