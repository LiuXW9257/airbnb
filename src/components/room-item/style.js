import styled from "styled-components";

export const ItemWrapper = styled.div`
  flex-shrink: 0;
  /* 避免盒子撑开 */
  box-sizing: border-box;
  /* 每个占据25% 可暂时4个每行 */
  /* width: 25%; */
  /* 修改为动态宽度 */
  width: ${props=>props.itemWidth};
  padding: 8px;

  .inner {
    width: 100%;
  }

  /* 解决图片比例不同导致的对齐问题 */
  .cover {
    position: relative;
    box-sizing: border-box;
    // 66.66% 意思是宽度/高度的比例
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    .changePageBtn {
      display: flex;
      position: absolute;
      z-index: 9;
      justify-content: center;
      align-items: center;
      color: #bbb;
    }

    .left-Btn{
      top: 0;
      left: 0;
      
      height: 100%;
      width: 40px;
      }

    .right-Btn{
      top: 0;
      right: 0;
      height: 100%;
      width: 40px;
    }

    &:hover .changePageBtn {
      background-color: rgba(0,0,0,.4);
    }
    cursor: pointer;
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.verifyColor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
    /* 超出部分使用省略号... */
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.text.primaryColor};
  }

  .count {
    margin: 0 2px 0 4px;
  }

  .MuiRating-decimal {
    margin-right: -3px;
  }
`;
