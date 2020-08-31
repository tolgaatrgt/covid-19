import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  max-width: 60rem;
  flex-direction: row;
  border: solid 1px #000d1b;
  border-radius: 1rem;
  background-color: #eef1f4;
  margin-bottom: 1.25rem;
  overflow: auto;
  ::-webkit-scrollbar {
    height: 0.75rem;
  }
  ::-webkit-scrollbar-thumb {
    background: #3a76b0;
    border-radius: 2rem;
    :hover {
      background: #2b4b6e;
    }
  }
`;
