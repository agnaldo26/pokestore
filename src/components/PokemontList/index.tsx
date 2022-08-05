import { usePokemonList } from "../../context/context";
import PokemonSummary from "../PokemonSummary";
import SearchResult from "../SearchResult";
import { ProductListContainer } from "./styles";

const PokemonList = () => {
  const { state } = usePokemonList();

  return !state.search.length ? (
    <ProductListContainer>
      {state.dataPokemon.results.map((item: any, index: number) => (
        <PokemonSummary key={index} url={item.url} />
      ))}
    </ProductListContainer>
  ) : (
    <SearchResult />
  );
};

export default PokemonList;
