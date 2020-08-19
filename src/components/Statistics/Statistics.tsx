import React from 'react'
import {Wrap,BoardWrap,BoardUnit,StyledBoardUnit,UnitTitle} from './styled'
import {Country} from '../../App'
type Props = {
    data?: Country
}
export const Statistics: React.FC<Props> = ({data}) => {

    return (
    
    <Wrap> 
     <BoardWrap>
         <BoardUnit>{data?.title}</BoardUnit>
         <StyledBoardUnit>
             <UnitTitle>Total Cases</UnitTitle>
             {data?.total_cases}</StyledBoardUnit>
         <StyledBoardUnit >
         <UnitTitle>Total Deaths</UnitTitle>
             {data?.total_deaths}
             </StyledBoardUnit>
         <StyledBoardUnit>
         <UnitTitle>Total New Cases Today</UnitTitle>
             {data?.total_new_cases_today}
             </StyledBoardUnit>
         <StyledBoardUnit>
         <UnitTitle>Total New Deaths Today</UnitTitle>
             {data?.total_new_deaths_today}
             </StyledBoardUnit>
         <StyledBoardUnit>
         <UnitTitle green>Total Recovered</UnitTitle>
             {data?.total_recovered}
             </StyledBoardUnit>
     </BoardWrap>
    </Wrap>

        )
}




export default Statistics
