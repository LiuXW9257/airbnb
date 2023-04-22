import IconLogo from "@/assets/svg/icon_logo";
import React, { memo } from "react";
import { LeftWrapper } from "./style";
import { useNavigate } from "react-router-dom";

const HeaderLeft = memo(() => {

  const navgate = useNavigate()

  const handleClickIcon = ()=>{
    navgate('/home')
  }
  
  return (
    <LeftWrapper>
      <div className="logo" onClick={handleClickIcon}>
        <IconLogo />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;
