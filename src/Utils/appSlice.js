import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
    name : "app",
    initialState :{
        isOpen : true
    },
    reducers : {
        toggleMenu : (state)=>{
            state.isOpen = !state.isOpen
            // console.log(state.isOpen);
        }
    }
})

export const {toggleMenu} = appSlice.actions;
 export default appSlice.reducer;