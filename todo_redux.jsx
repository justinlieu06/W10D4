import React from "react";
import ReactDom from "react-dom";
import configureStore from './frontend/store/store.js';
import {receiveTodo, receiveTodos} from './frontend/actions/todo_actions';
import Root from './frontend/components/root';
import allTodos from './frontend/reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  ReactDom.render(<Root store={store} />, root);
})