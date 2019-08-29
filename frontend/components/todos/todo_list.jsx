import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.todos.map( todo => {
              return (
                <TodoListItem todo={todo} key={todo.id} />
                )
            })
          }
        </ul>
        
      </div>
    )
  }
}

export default TodoList;