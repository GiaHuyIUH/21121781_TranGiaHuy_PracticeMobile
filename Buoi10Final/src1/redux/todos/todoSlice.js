import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_TODOS_REQUEST,
  fetchTodosSuccess,
  fetchTodosFailure,
  ADD_TODO_REQUEST,
  DELETE_TODO_REQUEST,
  UPDATE_TODO_REQUEST,
} from "./todoActions";

function* fetchTodos() {
  try {
    const response = yield call(
      fetch,
      "https://66ff62072b9aac9c997f1c11.mockapi.io/api/v1/todos"
    );
    const data = yield response.json();
    yield put(fetchTodosSuccess(data));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

function* addTodoSaga(action) {
  const { todo } = action.payload;
  try {
    const response = yield call(
      fetch,
      "https://66ff62072b9aac9c997f1c11.mockapi.io/api/v1/todos",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      }
    );
    const data = yield response.json();
    yield put({ type: "ADD_TODO_SUCCESS", payload: data });
  } catch (error) {
    console.error("Error adding todo:", error);
  }
}

function* deleteTodoSaga(action) {
  const { id } = action.payload;
  try {
    yield call(
      fetch,
      `https://66ff62072b9aac9c997f1c11.mockapi.io/api/v1/todos/${id}`,
      { method: "DELETE" }
    );
    yield put({ type: "DELETE_TODO_SUCCESS", payload: id });
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
}

export default function* todoSaga() {
  yield takeLatest(FETCH_TODOS_REQUEST, fetchTodos);
  yield takeLatest(ADD_TODO_REQUEST, addTodoSaga);
  yield takeLatest(DELETE_TODO_REQUEST, deleteTodoSaga);
}
