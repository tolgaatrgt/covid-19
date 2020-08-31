import styled from "styled-components";

type Props = {
  disable: boolean;
};
export const StyledButton = styled.div<Props>(
  ({ disable }) => `
  visibility: ${disable ? `hidden` : `visible`};
  cursor: pointer;
  padding: 0.25rem 1rem;
  border: none;
  display: flex;
  width: 6rem;
  align-items: center;
  outline: none;
  border-radius: 1rem;
  font-size: 1.25rem;
  height: 100%;
  background-color: #729db9;
  background-image: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0.5) 70%);
  :hover {
    transform: scale(1.1);
  }
`
);
