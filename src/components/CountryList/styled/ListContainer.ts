import styled from 'styled-components'

type Props = {
  isVisible: boolean
}

export const ListContainer = styled.div<Props> (({isVisible}) =>`
display:${isVisible ? `flex` : `none`};
flex-direction:column;
width: 20vh;
height: calc(100vh -1rem);
overflow-y: scroll;
overflow-x: hidden;
::-webkit-scrollbar {
    width: 7px;
    background: #474747;
}
::-webkit-scrollbar-thumb {
  background: #919191;
  border-radius: 4px;
}
`)