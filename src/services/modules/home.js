import { myRequest } from "../request";

export function getGoodPriceHomeInfo() {
  return myRequest.get({ url: "/home/goodprice" });
}

export function getHighScoreRoomInfo(){
  return myRequest.get({url: "/home/highscore"})
}

export function getDiscountRoomInfo(){
  return myRequest.get({url: "/home/discount"})
}

export function getRecommendRoomInfo(){
  return myRequest.get({url: "/home/hotrecommenddest"})
}

export function getLongforRoomInfo(){
  return myRequest.get({url: "/home/longfor"})
}

export function getPlusRoomInfo(){
  return myRequest.get({url: "/home/plus"})
}