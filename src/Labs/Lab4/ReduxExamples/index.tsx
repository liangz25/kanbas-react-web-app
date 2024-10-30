import React from "react";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoList from "./todos/TodoList";
import TodoItem from "./todos/TodoItem";

export default function ReduxExamples() {
  return(
    <div>
      <h2>Redux Examples</h2>
      <CounterRedux />
      <AddRedux />
      <TodoList />
      
    </div>
  );
};
