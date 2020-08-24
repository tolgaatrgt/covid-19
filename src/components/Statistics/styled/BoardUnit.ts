import styled from "styled-components";

export const BoardUnit = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 5rem;
  font-size: 1.5rem;
  color: black;
  align-items: center;
  border: solid gray;
  border-width: 0 0.063rem 0.063rem 0;
  margin: 0.625rem 0.625rem 0 0.625rem;
  -moz-box-shadow: 0 1.563rem 5.45rem -0.188rem rgba(83, 117, 143, 1);
  box-shadow: -0 1.563rem 5.45rem -0.188rem rgba(83, 117, 143, 0.8);
  width: 20%;
  justify-content: space-between;
  span {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
`;

export const NameUnit = styled(BoardUnit)`
  color: #27496d;
  font-size: 1.75rem;
  text-align: center;
  background-color: #9cb7d4ba;
  padding: 0.313rem 0.625rem;
  justify-content: center;
`;
