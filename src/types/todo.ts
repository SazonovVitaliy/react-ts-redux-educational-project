export interface ITodoState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodoActionTypes {
  FETCH_TODOS = "FETCH_TODO",
  FETCH_TODOS_SUCCESS = "FETCH_TODO_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODO_ERROR",
  SET_TODOS_PAGE = "SET_TODO_PAGE",
}

interface FetchTodosAction {
  type: TodoActionTypes.FETCH_TODOS;
}
interface FetchTodosSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: any[];
}
interface FetchTodosErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}
interface SetTodosPageAction {
  type: TodoActionTypes.SET_TODOS_PAGE;
  payload: number;
}

export type TodosActions =
  | FetchTodosAction
  | FetchTodosSuccessAction
  | FetchTodosErrorAction
  | SetTodosPageAction;
