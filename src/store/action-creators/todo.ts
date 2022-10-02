import axios from "axios";
import { Dispatch } from "react";
import { TodoActionTypes, TodosActions } from "../../types/todo";
import { UserActionTypes, UsersAction } from "../../types/users";

const usersUrl = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = (page = 1, limit = 10) => {
  return async function (dispatch: Dispatch<TodosActions>) {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      const response = await axios.get(usersUrl, {
        params: {
          _limit: limit,
          _page: page,
        },
      });
      setTimeout(() => {
        dispatch({
          type: TodoActionTypes.FETCH_TODOS_SUCCESS,
          payload: response.data,
        });
      }, 500);
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: "Произошла ошибка при загрузке списка дел!",
      });
    }
  };
};

export const setTodoPage = (page: number): TodosActions => {
  return { type: TodoActionTypes.SET_TODOS_PAGE, payload: page };
};
