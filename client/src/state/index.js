import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    posts: [],
    community: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState:initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setFriends: (state, action) => {
            if(state.user){
                state.user.friend = action.payload.friends;
            }
            else{
                console.error("user friends non-existence :(");
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts; 
        },
        setPost: (state, action) => {
            const updatedPost = state.posts.map((post)=>{
                if(post._id === action.payload.post_id) return action.payload.post;
                return post;
            });
            state.posts = updatedPost;
        },
        setCommunities: (state, action) => {
            state.community = action.payload.communities;

        },
        setCommunity: (state, action) => {
            const updateCommunity = state.community.map((community)=> {
                if(community.__id === action.payload.community_id) return  action.payload.community;
                return community;
            });
            state.community = updateCommunity;
        }

    }
})

export const {setMode, setCommunities, setCommunity, setFriends, setLogin, setLogout, setPost, setPosts} = authSlice.actions;
export default authSlice.reducer;