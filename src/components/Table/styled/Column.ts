import styled from "styled-components";

type Props = {
  isEven?: boolean;
};

export const Column = styled.div<Props>(
  ({ isEven }) => `
  display: flex;
  flex-direction: column;
  background-color: ${isEven ? `#dddddd` : `#faf9f9`};
`
);
