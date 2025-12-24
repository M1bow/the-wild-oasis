import styled, { css } from "styled-components";

const Row = styled.main`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6 rem;
    `}
`;

//react and not styledComponents
Row.defaultProps = {
  type: "vertical",
};

export default Row;
