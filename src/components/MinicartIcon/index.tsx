import { usePokemonList } from "../../context/context";
import Pokeball from "../../assets/images/pokeball.png";
import { ButtonIconMinicart } from "./styles";
interface MinicartIconProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
const MinicartIcon = ({ onClick }: MinicartIconProps) => {
  const { state } = usePokemonList();

  return (
    <ButtonIconMinicart onClick={onClick}>
      <span>{state.cart.length}</span>
      <img src={Pokeball} alt='ícone do carrinho' />
    </ButtonIconMinicart>
  );
};

export default MinicartIcon;
