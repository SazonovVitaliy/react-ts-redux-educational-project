import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  todos: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
