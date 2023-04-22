import styled from "styled-components";

export const CenterWarpper = styled.div`
  .search-bar {
    display: flex;
    /* 主轴两端排列 */
    justify-content: space-between;
    /* 副轴居中 */
    align-items: center;
    width: 300px;
    height: 48px;
    /* padding border 不会撑起盒子 */
    box-sizing: border-box;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    ${(props) => props.theme.mixin.hoverShowdom}

    .text {
      padding: 0 16px;
      color: #222;
      font-weight: 600;
    }

    .icon {
      display: flex;

      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${(props) => props.theme.color.primary};
    }
  }
`;
