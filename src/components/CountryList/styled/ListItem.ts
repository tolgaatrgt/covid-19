import styled from "styled-components";

export const ListItem = styled.div`
  display: flex;
  padding: 2% 5%;
  font-size: 1.25rem;
  transition: 0.1s;
  font-family: monospace;
  border: solid 0.063rem #27496d;
  color: #27415d;
  background-color: #dae0e7;
  cursor: pointer;
  border-radius: 0.125rem;
  margin: 0.094rem 0.313rem 0.094rem 0.313rem;
  :hover {
    background-color: #27496d7a;
    color: white;
    transform: scale(1.05);
    border-color: black;
  }
`;
