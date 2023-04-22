import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import { fetchGoodPriceHomeInfoAction } from "@/store/modules/home";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import HomeSectionV3 from "./c-cpns/home-section-v3";
import HomeLongfor from "./c-cpns/home-longfor";
import { roomListIsEmpty } from "@/utils/home";

const Home = memo(() => {
  const dispatch = useDispatch();
  const { 
      goodPriceHomeInfo,
      highScoreHomeInfo,
      discountRoomInfo,
      recommendRoomInfo,
      longforRoomInfo, 
      plusRoomInfo,
    } = useSelector((state) => state.home);
  useEffect(() => {
    // getGoodPriceHomeInfo();
    dispatch(fetchGoodPriceHomeInfoAction());
  }, [dispatch]);

  return (
    <div>
      <HomeWrapper>
        <HomeBanner />
        <div className="content">
          {roomListIsEmpty(discountRoomInfo) && <HomeSectionV2 infoData={discountRoomInfo} />}
          {roomListIsEmpty(recommendRoomInfo) && <HomeSectionV2 infoData={recommendRoomInfo} />}
          {roomListIsEmpty(longforRoomInfo) && <HomeLongfor infoData={longforRoomInfo} />}
          {roomListIsEmpty(goodPriceHomeInfo) &&<HomeSectionV1 infoData={goodPriceHomeInfo}/>}
          {roomListIsEmpty(highScoreHomeInfo) &&<HomeSectionV1 infoData={highScoreHomeInfo}/>}
          {roomListIsEmpty(plusRoomInfo) && <HomeSectionV3 infoData={plusRoomInfo} />}
        </div>
      </HomeWrapper>
    </div>
  );
});

export default Home;
