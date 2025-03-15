import React, { useState } from 'react'
import '../todo/todo-list.css'
import TodoForm from './TodoForm';
import TodoItems from './TodoItems';
import TodoDateTime from './TodoDateTime';
import ClearAllTodo from './ClearAllTodo';

const keyName = "todoList"

const TodoList = () => {
    const [task, setTask] = useState(() => {
      const rowData = localStorage.getItem(keyName);
      if(!rowData) return [];
      return JSON.parse(rowData);
    });

    const handleFormSubmit = (inputValue) => {
        const {id, content, checked} = inputValue
        if (!content) return;
        const ifInputValueExist = task.find((currTask)=>currTask.content === content)
        if (ifInputValueExist) return; 
        setTask((prevTask) => [...prevTask,{id,content,checked}]); //id:id,content:content,checked:checked
    }

    // Save data in local storage
    localStorage.setItem(keyName,JSON.stringify(task));

    const handleDeleteBtn = (value) => {
      const updatedTodo = task.filter((currTask) => currTask.content !== value);
      setTask(updatedTodo);
    }

    const handleClearAllTodo = () => {
        setTask([]);
    }

    const handlecheckedTodo = (value) => {
      const checkedTask = task.map((currTask)=>{
        if (currTask.content === value) {
          return {...currTask, checked:!currTask.checked}
        }else{
          return currTask;
        }
      })
      setTask(checkedTask);
    }

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
          <TodoDateTime/>
        </header>
        <TodoForm onAddTodo={handleFormSubmit}/>
        <section className='myUnOrdList'>
            <ul>
                {
                    task.map((items) => {
                        return <TodoItems key={items.id} data={items.content} onHandleDeleteBtn={handleDeleteBtn} onHandlecheckedTodo={handlecheckedTodo} checked={items.checked}/>
                    })
                }
            </ul>
        </section>
        <ClearAllTodo onHandleClearAllTodo={handleClearAllTodo}/>
      </section>
    </>
  )
}

export default TodoList
