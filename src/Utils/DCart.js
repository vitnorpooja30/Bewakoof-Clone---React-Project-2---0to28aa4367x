import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
    },
    reducers : {
        handleCart : (state , action) =>{
            const id  = action.payload._id;
            let favList = state.items.filter((fav) => fav._id !== id)

            if(favList.length === state.items.length){
                state.items.push(action.payload);
            }else{
                state.items = favList;
            }
        }
    }
})

export const {handleCart} = cartSlice.actions;
export default cartSlice.reducer;