import styled from "styled-components";

type Props = {
  isShow: boolean;
};
export const Wrap = styled.div<Props>(
  ({ isShow }) => `
  display: ${isShow ? `block` : `none`};
  flex-direction: column;
  margin-right: 2rem;
  background-color: #fafafa;
  border-radius: 0 1rem 1rem 0;
  border: solid 1px #bec7d1;
  width: 20rem;`
);
