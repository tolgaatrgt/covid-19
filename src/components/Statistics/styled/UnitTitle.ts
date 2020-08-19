import styled from 'styled-components'

type Props = {
    green?: boolean
}
export const UnitTitle = styled.div<Props>( ({green}) => `

display: inline-block;
flex-direction: row;
text-align: center;
justify-content:center;
width: 100%;
border-bottom: solid 1px gray;
color:${green ? `#12c712` : `red`};
`)