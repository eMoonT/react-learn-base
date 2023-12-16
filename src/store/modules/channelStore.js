import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const channelStore = createSlice({
    name: "channel",
    initialState: {
        channelList: []
    },
    reducers: {
        setChannel: (state, action) => {
            state.channelList = action.payload
        }
    }
})

const { setChannel } = channelStore.actions

const fetchChannelList = () => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:3000/data")
        console.log(res.data)
        dispatch(setChannel(res.data))
    }
}

export { fetchChannelList }

const channelReducer = channelStore.reducer

export default channelReducer