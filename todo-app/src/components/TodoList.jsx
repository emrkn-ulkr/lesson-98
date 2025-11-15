import React from 'react'
import Todo from './Todo'

function TodoList({ todos, onRemoveTodo, onUpdateTodos }) {
    return (
        <div style={{
            width: "100%", marginTop: "50px"
        }}>
            {
                todos && todos.map((todo) => {
                    return <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodos={onUpdateTodos} />
                })
            }

        </div >
    )
}

export default TodoList
