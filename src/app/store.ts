import { ITodo } from "./ITodo";
import { ADD_TODO, TOGGLE_TODO,  REMOVE_TODO, REMOVE_ALL_TODO } from "./actions";

export interface IAppState{
    todos: ITodo[];
    lastUpdate: Date;
}

export function rootReducer(state, action){
    switch(action.type){
        case ADD_TODO:
            action.todo.id = state.todos.length + 1;
            return Object.assign({}, state, {
                todos: state.todos.concat(Object.assign({}, action.todo)),
                lastUpdate: new Date()
            });
        case TOGGLE_TODO:
            return state;
        case REMOVE_TODO:
        debugger;
         return Object.assign({}, state, {
             todos: state.todos.filter(t => t.id !== action.id),
             lastUpdate: new Date()
         });
        case REMOVE_ALL_TODO:
            return Object.assign({}, state, {
                todos: [],
                lastUpdate: new Date()
            });
        default:
            return state;
    }
}

export const INITIAL_STATE: IAppState = {
    todos : [],
    lastUpdate: null
}


