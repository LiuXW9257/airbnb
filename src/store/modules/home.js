/**
 * toolkit 方式
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { 
  getDiscountRoomInfo, 
  getGoodPriceHomeInfo, 
  getHighScoreRoomInfo, 
  getLongforRoomInfo, 
  getPlusRoomInfo, 
  getRecommendRoomInfo
} from "@/services";

// 创建异步方法
export const fetchGoodPriceHomeInfoAction = createAsyncThunk(
  "fetchGoodPriceHomeInfo",
  (condition, {dispatch}) => {
    getGoodPriceHomeInfo().then(res=>{
      dispatch(changeGoodPriceInfoAction(res))
    })
    getHighScoreRoomInfo().then(res=>{
      dispatch(changeHightScoreInfoAction(res))
    })
    getDiscountRoomInfo().then(res=>{
      dispatch(changeDiscountRoomInfoAction(res))
    })
    getRecommendRoomInfo().then(res=>{
      dispatch(changeRecommendRoomInfoAction(res))
    })
    getLongforRoomInfo().then(res=>{
      dispatch(changeLongforRoomInfoAction(res))
    })
    getPlusRoomInfo().then(res=>{
      dispatch(changePlusRoomInfoAction(res))
    })
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    // 高性价比房源
    goodPriceHomeInfo: {},
    highScoreHomeInfo:{},
    discountRoomInfo:{},
    recommendRoomInfo:{},
    longforRoomInfo:{},
    plusRoomInfo:{},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceHomeInfo = payload;
    },
    changeHightScoreInfoAction(state, { payload }) {
      state.highScoreHomeInfo = payload;
    },
    changeDiscountRoomInfoAction(state, { payload }) {
      state.discountRoomInfo = payload;
    },
    changeRecommendRoomInfoAction(state, {payload}){
      state.recommendRoomInfo = payload
    },
    changeLongforRoomInfoAction(state, { payload }){
      state.longforRoomInfo = payload
    },
    changePlusRoomInfoAction(state, {payload}){
      state.plusRoomInfo = payload
    }
  },
  // 异步方法，将结果存到state
  extraReducers: {
    // [fetchGoodPriceHomeInfoAction.fulfilled](state, { payload }) {
    //   // console.log(payload);
    //   state.goodPriceHomeInfo = payload;
    // },
  },
});

export const {
  changeGoodPriceInfoAction,
  changeHightScoreInfoAction,
  changeDiscountRoomInfoAction,
  changeRecommendRoomInfoAction,
  changeLongforRoomInfoAction,
  changePlusRoomInfoAction
} = homeSlice.actions;

// 这里导出的是 reducer
export default homeSlice.reducer;
