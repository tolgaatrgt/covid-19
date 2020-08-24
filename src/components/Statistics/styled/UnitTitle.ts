import styled from "styled-components";

type Props = {
  green?: boolean;
};
export const UnitTitle = styled.div<Props>(
  ({ green }) => `

display: inline-block;
text-align: center;
justify-content:center;
width: 100%;
font-size: 1.25rem;
border-bottom: solid 0.063rem gray;
color:${green ? `#1d4e1d` : `#510000`};
background-color: ${green ? `#00800047` : `#ff000047`}
`
);
