import styled from "styled-components";

export const RoomsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 24px;

  >.cover {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255,255,255,.8);
    display: ${props=>props.isLoading?"block":"none"};
  }
`