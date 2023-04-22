import React, { memo } from "react";
import { Bannerwrapper } from "./style";

const HomeBanner = memo(() => {
  return (
    <Bannerwrapper>{/* <img src={bannerImage} alt="" /> */}</Bannerwrapper>
  );
});

export default HomeBanner;
