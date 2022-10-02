import { UserActionTypes, UsersAction, UsersState } from "../../types/users";

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const usersReducer = (
  state = initialState,
  action: UsersAction
): UsersState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { users: [], loading: true, error: null };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { users: action.payload, loading: false, error: null };
    case UserActionTypes.FETCH_USERS_ERROR:
      return { users: [], loading: false, error: action.payload };

    default:
      return state;
  }
};
