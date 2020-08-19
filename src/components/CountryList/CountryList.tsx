import React from 'react'
import {ListContainer, ListItem} from './styled'
import {Each} from '../../App'
type Props = {
    countries: Each[],
    onClick: (arg: number) => void
    isVisible: boolean
}
export const CountryList: React.FC<Props> = ({countries,onClick,isVisible}) => {

    const renderList = (array = countries) => {
     return array.map((item,i) =>
    <ListItem onClick={() => onClick(item.id)} key={i}>{item.name}</ListItem>
      )
    }

      return (
         <ListContainer isVisible={isVisible}>
          {renderList()}    
         </ListContainer>
)
}
export default CountryList