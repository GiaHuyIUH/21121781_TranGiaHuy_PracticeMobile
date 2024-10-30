import {
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE,
    ADD_TODO_REQUEST,
    DELETE_TODO_REQUEST,
    UPDATE_TODO_REQUEST,
} from './todoActions';

const initialState = {
    todos: [],
    loading: false,
    error: null,
};

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TODOS_SUCCESS:
            return {...state, todos: action.payload, loading: false };
        case FETCH_TODOS_FAILURE:
            return {...state, error: action.payload, loading: false };
        case ADD_TODO_REQUEST:
            return {...state, todos: [...state.todos, action.payload] };
        case DELETE_TODO_REQUEST:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
        case UPDATE_TODO_REQUEST:
            return {
                ...state,
                todos: state.todos.map(todo => (todo.id === action.payload.id ? action.payload.todo : todo)),
            };
        default:
            return state;
    }
}