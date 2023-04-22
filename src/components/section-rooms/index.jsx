import PropTypes from "prop-types";
import React, { memo } from "react";

import RoomItem from "../room-item";
import { RoomListWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList } = props;
  const {numsEachRow = 4} = props
  return (
    <RoomListWrapper>
      {roomList?.slice(0, 8)?.map((item) => {
        return <RoomItem key={item.id} roomInfo={item} itemWidth={(1/numsEachRow)*100+"%"}/>;
      })}
    </RoomListWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
  numsEachRow: PropTypes.number
};

export default SectionRooms;
