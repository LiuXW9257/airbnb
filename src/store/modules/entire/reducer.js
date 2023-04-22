import { CHANGE_CURRENT_PAGE, CHANGE_ROOM_LIST, CHANGE_TOTAL_COUNT } from "./constant";

const initalState = {
  // 当前页码
  currentPage: 0,
  // 房间列表
  roomList: [],
  // 数据总个数
  totalCount: 0, 
};

function reducer(state = initalState, action) {
  const { type, data } = action;
  switch (type) {
    case CHANGE_CURRENT_PAGE:
      return {...state, currentPage: data }
    case CHANGE_ROOM_LIST:
      return {...state, roomList: data }
    case CHANGE_TOTAL_COUNT:
      return {...state, totalCount: data }
    default:
      return state;
  }
}

export default reducer;
