import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 0, text: "wake up at 5 am", completed: true}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload.text)
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            )
        },
        updateTodo: (state, action) => {
            state.todos.map(key=>{
                if(key.id === action.payload) {
                    key.completed = true;
                }
            })
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer

