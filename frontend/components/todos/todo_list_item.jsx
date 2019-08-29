import React from 'react';

const TodoListItem = ({todo}) => {
  return (
    <ul>
      <li>The title is: {todo.title}</li>
      <li>The body is: {todo.body}</li>
    </ul>
  );
};

export default TodoListItem;