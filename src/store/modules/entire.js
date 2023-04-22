import { getEntireRoomList } from "@/services/modules/entire";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEntireRoomListAction = createAsyncThunk(
  "fetRoomList",
  async (newPage, {dispatch, getState})=>{
    const { pageSize, isLoading } = getState().entire
    const offset = newPage * pageSize
    dispatch(changeLoadingAction(true))
    const res = await getEntireRoomList(offset)
    dispatch(changeLoadingAction(false))
    const {list, totalCount} = res
    dispatch(changeCurrentPageAction(newPage))
    dispatch(changeRoomListAction(list))
    dispatch(changeTotalCountAction(totalCount))
  }
)

const entireSlice = createSlice({
  name: "entire",
  initialState:{
      // 当前页码
    currentPage: 0,
    // 房间列表
    roomList: [],
    // 数据总个数
    totalCount: 0, 
    // 每页条数
    pageSize: 20,
    // 加载状态
    isLoading: false
  },
  reducers:{
    changeCurrentPageAction(state, { payload }){
      state.currentPage = payload
    },
    changeRoomListAction(state, { payload }){
      state.roomList = payload
    },
    changeTotalCountAction(state, { payload }){
      state.totalCount = payload
    },
    changeLoadingAction(state, {payload}){
      state.isLoading = payload
    }
  }
})
export const {
  changeCurrentPageAction, 
  changeRoomListAction, 
  changeTotalCountAction,
  changeLoadingAction
} = entireSlice.actions

export default entireSlice.reducer;