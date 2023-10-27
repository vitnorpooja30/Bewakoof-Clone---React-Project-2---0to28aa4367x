import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name : "loginDetails",
    initialState :{
        userDetails : null
    },
    reducers :{
        setLoginDetails : (state,action)=>{
            state.userDetails = action.payload;

        }
    }
})
 export const {setLoginDetails} = loginSlice.actions;
export default loginSlice.reducer;