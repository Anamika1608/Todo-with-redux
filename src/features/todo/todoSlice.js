import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [
        {id : nanoid() , task : "code" }
    ]
}

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodo : (state,action)=>{
            const todo = {
                id : nanoid(),
                task : action.payload
            }
            state.todos.push(todo);
        },
        delTodo : (state,action)=>{
            state.todos = state.todos.filter((todo)=>(
                action.payload != todo.id
            ))
        },
        editTodo : (state,action)=>{
            state.todos = state.todos.map((todo)=>{
                if(action.payload.id == todo.id) (
                    {...todo , task : action.payload.task}
                )
            })
        }
    }
})

export const {addTodo,delTodo,editTodo} = todoSlice.actions; // to use in other comp

export const todoReducer = todoSlice.reducer; // for store