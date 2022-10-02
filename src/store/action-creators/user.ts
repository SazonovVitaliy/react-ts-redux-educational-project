import axios from "axios";
import { Dispatch } from "react";
import { UserActionTypes, UsersAction } from "../../types/users";

const usersUrl = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => {
  return async function (dispatch: Dispatch<UsersAction>) {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get(usersUrl);
      setTimeout(() => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: response.data,
        });
      }, 500);
      console.log(response.data);
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "Произошла ошибка при загрузке пользователей!",
      });
    }
  };
};
