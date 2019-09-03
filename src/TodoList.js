import React from 'react';
import {Todo} from './Todo'


export class TodoList extends React.Component {


    render() {
        const todoList = this.props.todoList.map((todo, i) => {
            return (
                <div>
                    <Todo key={i} text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
                </div>
                
            );
        });

        return (
            <div className="cardContainer">
                {todoList}
            </div>
            
        );


    }

}