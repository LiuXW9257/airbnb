import PropTypes from "prop-types";
import React, { memo } from "react";
import { useRef } from "react";

import { Carousel } from 'antd';
import Rating from "@mui/material/Rating";
import { ItemWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import { useNavigate } from "react-router-dom";


const RoomItem = memo((props) => {
  const myCarousel = useRef()
  const navgate = useNavigate()

  const { roomInfo } = props;
  const { itemWidth } =props;
  const rating = roomInfo.star_rating ?? 5;

  const onePiture = () => {
    return (
      <div className="cover">
        <img src={roomInfo.picture_url} alt="" />
      </div>
    )
  }

  const changePic = (isleft) => {
    isleft ? myCarousel.current.prev() : myCarousel.current.next()
  }

  function handleImgClick(){
    navgate('/detail')
  }
  const morePicture = () => {
    return (
      <Carousel ref={myCarousel} dots={false}>
          {roomInfo.picture_urls.map((item)=>{
            return (
              <div className="cover" key={item}>
                <div onClick={()=>changePic(true)} className="changePageBtn left-Btn">
                  <IconArrowLeft />
                </div>
                <img src={item} alt="" onClick={handleImgClick} />
                <div onClick={()=>changePic(false)} className="changePageBtn right-Btn">
                  <IconArrowRight />
                </div>
              </div>
            )
          })}
      </Carousel>
    )
  }

  return (
    <ItemWrapper
      verifyColor={roomInfo.verify_info.text_color || "#39576a"}
      itemWidth={itemWidth ?? "25%"}
      >
      <div className="inner">
        {roomInfo.picture_urls ? morePicture() : onePiture()}
        <div className="desc">{roomInfo.verify_info.messages.join(" · ")}</div>
        <div className="name">{roomInfo.name}</div>
        <div className="price">￥{roomInfo.price} /晚</div>
        <div className="bottom">
          <Rating
            value={rating}
            precision={0.1}
            sx={{ fontSize: "12px", color: "#00848A" }}
            readOnly
          />
          {roomInfo.reviews_count && (
            <span className="count"> · {roomInfo.reviews_count}</span>
          )}
          <span className="extra">{roomInfo.bottom_info?.content}</span>
        </div>
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  roomInfo: PropTypes.object,
  itemWidth: PropTypes.string
};

export default RoomItem;
