import styled from "styled-components";

export const LongforWrapper = styled.div`
  /* 避免内容太多，在flex布局中被压缩 */
  flex-shrink: 0;
  width: ${props=>props.itemWidth};
  
  .inner {
    padding: 8px;

    .item-info {
      position: relative;
      border-radius: 3px;
      overflow: hidden;
    }
  }

  .cover {
    width: 100%;
  }

  .bg-cover {
    /* 半透明蒙板 */
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60%;
    background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%)
  }

  .info {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 0;
    display: flex;
    /* y轴为主轴 */
    flex-direction: column;
    justify-content: center;
    /* x轴居中 */
    align-items: center;
    padding: 0 24px 32px;
    color: #fff;

    .city {
      font-size: 18px;
      font-weight: 600;
    }

    .price {
      font-size: 14px;
      margin-top: 5px;
    }
  }
`