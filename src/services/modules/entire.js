import { myRequest } from "../request";

export function getEntireRoomList(offset = 0, size = 20) {
  return myRequest.get({
    url: "/entire/list",
    params:{
      offset,
      size
    }
  })
}
