import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";

export const Todos = (props) => {
    return (
        <div className="container">
           {/* <center><h3>Todo's List</h3></center> 
                    OR */}
           <h3 className='text-center my-3'>Todo's List</h3>
            {/* <TodoItem todo={props.todos [0]}/> ye tb likhte jab khali 1 sno print krana tha */}
            {props.todos.length ==0? "no todo's to display" :
             props.todos.map((todo)=>{
                return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                )
            } )}
        </div>
    )
}
