import React, { memo } from "react";
import { FooterWrapper } from "./style";

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="content">AppFooter</div>
    </FooterWrapper>
  );
});

export default AppFooter;
