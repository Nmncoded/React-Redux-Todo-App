import { createStore } from 'redux';
let store = createStore(Reducer);

function Reducer(state={
    allTodos:[],
},action){
    if(action.type === 'add'){
        return {
            ...state,
            allTodos: state.allTodos.concat(action.payload)
        }
    }
    if(action.type === 'delete'){
        return {
            ...state,
            allTodos: [...state.allTodos].filter((p,index) => index !== action.payload)
        }
    }
    if(action.type === 'toggle'){
        let allClonedTodos = [...state.allTodos]
        .map((todo,index) => {
            if(index === action.payload){
                todo.isDone = !todo.isDone
            }
            return todo;
        })
        return {
            ...state,
            allTodos: allClonedTodos,
        }
    }
    return {...state};
}

export default store;