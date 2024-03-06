import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initalState = {
    loading: false,
    post: [],
    error: null
}
const postSlice = createSlice({
    name: "post",
    initalState: initalState,
    reducers: {
        postApiStarted: state => { state.loading == true },
        postApiSuccess: (state, action) => {
            console.log(action.payload);
            state.loading = false,
                state.post = action.payload,
                state.error = null
        },
        postApiFailure: (state, action) => {
            state.loading = false,
                state.post = action.payload,
                state.error = null
        }
    }
}
)

export function fetchPost() {
    dispatchEvent(postApiStarted());
    return async (dispatch) => {
        try {
            const response = await axios.get("https://gauravgitacc.github.io/postAppData/post.json")
            dispatch(postApiSuccess(response.data));
        }
        catch (error) {
            dispatch(postApiFailure(error.message));
        }
    }
}
// export const {postApiStarted, postApiSuccess, postApiFailure}=postSlice.actions;
export default postSlice.reducer;