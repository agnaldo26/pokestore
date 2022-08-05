import Minicart from "../Minicart";
import OrderPlaced from "../OrderPlaced";
import PokemonList from "../PokemontList";
import { MainContainer } from "./styles";

const Main = () => {
  return (
    <MainContainer>
      <PokemonList />
      <Minicart />
      <OrderPlaced />
    </MainContainer>
  );
};

export default Main;
