import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  // 入力した値（変化する値）
  const [todoText, setTodoText] = useState("");

  const [
    incompleteTodos,
    setIncompleteTodos
  ] = useState([]);

  const [
    completeTodos,
    setCompleteTodos
  ] = useState([]);

  const onChangeTodo = (event) =>
    setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [
      ...incompleteTodos,
      todoText
    ];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    deleteIncompleteList(index);
  };

  const onClickComplete = (index) => {
    const completeTodo = incompleteTodos[index];
    setCompleteTodos([
      ...completeTodos,
      completeTodo
    ]);
    deleteIncompleteList(index);
  };

  const deleteIncompleteList = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickBack = (index) => {
    setIncompleteTodos([
      ...incompleteTodos,
      completeTodos[index]
    ]);
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodo}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるTODOは5個までだよ
        </p>
      )}
      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo
        completeTodos={completeTodos}
        onClick={onClickBack}
      />
    </>
  );
};
