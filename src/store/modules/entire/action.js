import { getEntireRoomList } from "@/services/modules/entire";
import { CHANGE_CURRENT_PAGE, CHANGE_ROOM_LIST, CHANGE_TOTAL_COUNT } from "./constant";

export const changeCurrentPageAction = (data)=> ({
  type: CHANGE_CURRENT_PAGE,
  data,
})

export const changeRoomListAction = (data)=>({
  type: CHANGE_ROOM_LIST,
  data,
})

export const changeTotalCountAction = (data) =>({
  type: CHANGE_TOTAL_COUNT,
  data,
})

// 异步action
export const fetchRoomListAction = () =>{
  return async (dispatch, getState)=>{
    console.log('dispatch----', dispatch());
    const res = await getEntireRoomList()
    dispatch(changeRoomListAction(res.list))
    dispatch(changeTotalCountAction(res.totalCount))
    console.log('getState----', getState());
  }
}