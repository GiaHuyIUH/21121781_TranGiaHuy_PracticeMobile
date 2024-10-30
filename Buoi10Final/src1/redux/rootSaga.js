import { all } from 'redux-saga/effects';
import todoSaga from './todos/todoSagas';

export default function* rootSaga() {
    yield all([todoSaga()]);
}