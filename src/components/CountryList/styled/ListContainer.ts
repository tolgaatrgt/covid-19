import styled from "styled-components";

type Props = {
  isVisible: boolean;
};

export const ListContainer = styled.div<Props>(
  ({ isVisible }) => `
display:${isVisible ? `inline-block` : `none`};
flex-direction:column;
width:15%;
overflow-y: scroll;
overflow-x: hidden;
background-color: #27496d47;
::-webkit-scrollbar {
    width: 0.438rem;
}
::-webkit-scrollbar-thumb {
  background: #5f5f5f;
  border-radius: 0.25rem;
}
`
);
