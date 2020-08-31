import styled from "styled-components";
import { Tabs } from "../../../types";

type Props = {
  Tab: Tabs;
};

export const D = styled.div<Props>(
  ({ Tab }) => `
  background-color: ${Tab === `Daily` ? `#3a76b0` : `#8badcd9e`};
  padding: 2% 3%;
  font-size: 1.25rem;
  cursor: pointer;
  border-radius: 0.5rem 0 0 0.5rem;
`
);
export const M = styled(D)<Props>(
  ({ Tab }) => `
background-color: ${Tab === `Mortality` ? `#3a76b0` : `#8badcd9e`};
  margin: 0 0.125rem 0 0.15rem;
  border-radius: 0;
`
);

export const I = styled(D)<Props>(
  ({ Tab }) => `
  background-color: ${Tab === `Increment` ? `#3a76b0` : `#8badcd9e`};
  border-radius: 0;
`
);
export const T = styled(M)<Props>(
  ({ Tab }) => `
  background-color: ${Tab === `TopTen` ? `#3a76b0` : `#8badcd9e`};
  border-radius: 0 0.5rem 0.5rem 0;

`
);
