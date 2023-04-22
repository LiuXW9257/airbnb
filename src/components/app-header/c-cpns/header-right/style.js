import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  /* 自己也是flex布局 */
  display: flex;
  /* 主轴尾部 */
  justify-content: flex-end;
  margin-right: 20px;
  align-items: center;
  color: ${(props) => props.theme.text.primaryColor};
  font-weight: 600;

  .btns {
    display: flex;
    align-items: center;
    .btn {
      height: 18px;
      line-height: 18px;
      padding: 0 15px;
      cursor: pointer;
      border-radius: 22px;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    width: 77px;
    height: 42px;
    /*  */
    justify-content: space-evenly;
    /* 副轴居中 */
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;

    // 过度      属性
    /* transition: box-shadow 0.2s ease;
    &:hover {
      box-shadow: 0.2px 4px rgba(0, 0, 0, 0.18);
    } */
    ${(props) => props.theme.mixin.hoverShowdom}

    .panel {
      position: absolute;
      right: 0;
      top: 50px;
      width: 180px;
      /* height: 200px; */
      background-color: #fff;
      border-radius: 10px;
      /* x轴偏移量 y轴偏移量 扩散 阴影颜色 */
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.18);

      .top,
      .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`;
