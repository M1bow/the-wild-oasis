import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;

// `;

//CHAOS FOR SEO

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 20px;
      font-weight: 800;
      /* background-color: yellow; */
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 200;
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}
`;

export default Heading;
