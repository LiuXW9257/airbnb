import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.primary};

  .logo {
    margin-left: 20px;
    cursor: pointer;
  }
`;
