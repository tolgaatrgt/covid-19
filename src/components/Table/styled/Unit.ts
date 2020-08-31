import styled from "styled-components";

export const Unit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 1.5rem;
  font-size: 1rem;
  align-items: center;
  justify-content: center;
  color: #d30000;
  font-weight: bold;
  padding: 1rem 3rem;
  border-bottom: solid 1px black;
  white-space: nowrap;
`;

export const KeyUnit = styled(Unit)`
  color: #27496d;
  padding: 1rem 2rem;
  font-weight: unset;
  box-shadow: none;
`;

export const ValueUnit = styled(Unit)`
  color: green;
  padding: 1rem 2rem;
  font-weight: unset;
  font-size: 1.25rem;
  box-shadow: none;
`;
