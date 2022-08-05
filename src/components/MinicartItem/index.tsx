import { PokemonItemTypes } from '../../context/context'
import { MinicartProductItemContainer, MinicartProductItemImage } from './styles'

const MinicartItem = ({ image, name, price}: PokemonItemTypes) => {
  return (
    <MinicartProductItemContainer>
      <MinicartProductItemImage src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <span>R$ {price}</span>
      </div>
    </MinicartProductItemContainer>
  )
}

export default MinicartItem