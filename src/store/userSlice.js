import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {users: []},
    reducers: {
        add: (state, action) => {
            state.users.push(action.payload)
        },
        
        deleteUser: (state, action) => {
            let isDelete = confirm("Rostdan ham o'chirmoqchimisiz?")
            if (isDelete) {
                state.users = state.users.filter(user => user.id !== action.payload)
            }
        },

        edit: (state, action) => {
            const {id, name, email} = action.payload
            const user = state.users.find(user => user.id === id)
            if (user) {
                user.name = name;
                user.email = email
            }
        }
    }
})

export const {add, deleteUser, edit} = userSlice.actions;
export default userSlice.reducer