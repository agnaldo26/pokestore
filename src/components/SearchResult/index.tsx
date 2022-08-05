import { usePokemonList } from "../../context/context";
import { ProductListContainer } from "../PokemontList/styles";
import PokemonSummary from "../PokemonSummary";

const SearchResult = () => {
  const { state } = usePokemonList();
  return (
    <ProductListContainer>
      {state.search.map((item, index) => {
        return <PokemonSummary url={item.url} key={index} />;
      })}
    </ProductListContainer>
  );
};

export default SearchResult;
