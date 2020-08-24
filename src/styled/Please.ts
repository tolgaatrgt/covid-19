import styled from "styled-components";
type Props = {
  isVisible: boolean;
};
export const Please = styled.div<Props>(
  ({ isVisible }) => `
  display: ${isVisible ? `flex` : `none`};
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #213952;
  `
);
