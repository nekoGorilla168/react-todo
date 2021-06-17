import React from "react";

export const IncompleteTodo = (props) => {
  const {
    incompleteTodos,
    onClickComplete,
    onClickDelete
  } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button
                onClick={() =>
                  onClickComplete(index)
                }
              >
                Complete
              </button>
              <button
                // 関数に引数を渡すときはアロー関数で定義
                onClick={() =>
                  onClickDelete(index)
                }
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
