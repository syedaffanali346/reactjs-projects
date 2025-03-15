import React from "react";

const ClearAllTodo = ({onHandleClearAllTodo}) => {
  return (
    <section>
      <button className="clear-btn" onClick={onHandleClearAllTodo}>
        Clear all
      </button>
    </section>
  );
};

export default ClearAllTodo;
