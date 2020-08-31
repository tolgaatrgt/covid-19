import styled from "styled-components";

type Props = {
  isActive?: boolean;
};
export const RangeDot = styled.div<Props>(
  ({ isActive }) => `
  background-color: #3a76b06b;
  border-radius: 1.5rem;
  height: 2rem;
  width: 2rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  margin-right: 0.5rem;
  cursor: pointer;
  color: white;
  border: solid 3px;
  border-color: ${isActive ? `#3a76b0` : `#e6e6e6`};
  :hover {
    transform: scale(1.1);
  } 
`
);
