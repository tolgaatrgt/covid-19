import styled from "styled-components";

type Props = {
  isActive: boolean;
};

export const LeftWrap = styled.div<Props>(
  ({ isActive }) => `
  display: ${isActive ? `flex` : `none`};
  align-items: center;
`
);
