import { PokemonItemTypes, usePokemonList } from "../../context/context";
import { Button } from "./styles";

interface ButtonProps {
  label: string;
  pokemon: PokemonItemTypes;
}

const BuyButton = ({ label, pokemon }: ButtonProps) => {
  const { state, setState } = usePokemonList();

  const addToCart = () => {
    setState({
      ...state,
      cart: [...state.cart, pokemon],
    });
  };
  return <Button onClick={addToCart}>{label}</Button>;
};

export default BuyButton;
