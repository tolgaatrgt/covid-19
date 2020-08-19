import React from 'react'
import styled from 'styled-components'
import CountryList from '../components/CountryList'
import Statistics from '../components/Statistics'
import { Each,Country } from '../App'
type Props = {
List: Each[]
changeSelected: (id: number) => void
data?: Country
isSelect: boolean
isGet: boolean
}

type SProps = {
isVisible: boolean
}
const Wrap = styled.div<SProps>(
    ({isVisible}) =>`
display: ${isVisible ? `flex` : `none`};
width: 100%;
justify-content: center;
align-items: center;
`)

export const Panel: React.FC<Props> = ({ List,data, changeSelected,isSelect,isGet }) => {
console.log(Boolean(List),isSelect)
      return (
      <>
       <CountryList isVisible={isGet} countries={List} onClick={changeSelected} /> 
       {isSelect && 
       <Statistics data={data} />
        }
       
        <Wrap isVisible={(isGet && !isSelect)} >
        Please select a country for statistics.</Wrap>
</>
)
}
export default Panel