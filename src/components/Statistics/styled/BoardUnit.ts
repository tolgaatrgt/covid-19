import styled from 'styled-components'

export const BoardUnit = styled.div`
display: flex;
flex-direction: column;
width: 15%;
min-height: 3.75rem;
font-size: 1.5rem;
align-items:center;
border: solid gray;
border-width: 0 0.5px 1px 0px;
justify-content: center;
`

export const StyledBoardUnit = styled(BoardUnit)`
width: 17%;
justify-content: space-between;

`