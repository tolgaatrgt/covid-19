import styled from "styled-components";
import { Unit } from "./Unit";

type Props = {
  isVisible: boolean;
};

export const Icon = styled.img<Props>(
  ({ isVisible }) => `
  display: none;
  width: 3rem;
  height: 3rem;
  transition-duration: 500ms;
  :hover {
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.3);
}
  ${Unit}:hover & {
    display: ${isVisible ? `flex` : `none`};
    
  }
`
);
