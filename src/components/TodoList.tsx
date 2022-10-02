import React, { useEffect } from "react";
import { FC } from "react";
import { useActions } from "./../hooks/useActions";
import { useTypedSelector } from "./../hooks/useTypedSelector";
import { fetchTodos } from "./../store/action-creators/todo";

const TodoList: FC = () => {
  const { todos, loading, error, limit, page } = useTypedSelector(
    (state) => state.todos
  );
  const pages = [1, 2, 3, 4, 5];
  const { fetchTodos, setTodoPage } = useActions();

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);
  return (
    <>
      {loading ? <h1>Идет загрузка...</h1> : <h1>{error}</h1>}
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
      <div style={{ display: "flex" }}>
        {pages.map((p) => (
          <div
            onClick={() => setTodoPage(p)}
            style={{
              border: p === page ? "1px solid black" : "1px solid green",
              padding: "0 5px",
            }}
            key={p}
          >
            {p}
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
