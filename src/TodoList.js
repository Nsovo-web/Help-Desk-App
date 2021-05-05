import React from 'react';
import Todo from './todoItem';

export default function TodoList({todoList,toggleComplete,editTodo,loadInfo}) {
    return (
        
        todoList.map(data =>{
            return <Todo loadInfo={loadInfo} key={data.id} item = {data} editTodo={editTodo}  toggleComplete={toggleComplete}/>
        })   
     
    )

    
}
