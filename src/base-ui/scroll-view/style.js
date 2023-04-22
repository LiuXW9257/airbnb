import styled from "styled-components";

export const ScrollWrapper = styled.div`
  padding: 10px 0;
  position: relative;

  .scroll {
    overflow: hidden;

    .scroll-content {
      display: flex;
      transition: transform 250ms ease;
    }
  }

  
  .control {
    position: absolute;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid #fff;
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);
    cursor: pointer;

    &.left {
      /* 定位信息 */
      left: 0;
      /* 盒子中部 */
      top: 50%;
      /* 自己中部 */
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }
`