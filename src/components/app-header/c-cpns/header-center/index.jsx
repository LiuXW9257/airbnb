import IconSearchBar from "@/assets/svg/icon-search-bar";
import React, { memo } from "react";
import { CenterWarpper } from "./style";

const HeaderCenter = memo(() => {
  return (
    <CenterWarpper>
      <div className="search-bar">
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <IconSearchBar />
        </div>
      </div>
    </CenterWarpper>
  );
});

export default HeaderCenter;
