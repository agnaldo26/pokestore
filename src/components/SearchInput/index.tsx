import { useState, useEffect } from "react";
import { usePokemonList } from "../../context/context";
import { Button } from "./styles";
import { Input, InputGroup, SearchContainer } from "./styles";

const SearchInput = () => {
  const { state, setState } = usePokemonList();

  const [search, setSearch] = useState("");

  const searchPokemon = () => {
    if (search === "") {
      setState({
        ...state,
        search: {
          name: "",
          url: "",
        },
        error: "Digite um nome",
      });
      setTimeout(() => {
        setState({
          ...state,
          error: "",
        });
      }, 3000);
    } else {
      const result = state.dataPokemon.results.filter((item: any) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );

      if (result.length === 0) {
        setState({
          ...state,
          error: "Pokemon não encontrado",
        });
        setTimeout(() => {
          setState({
            ...state,
            error: "",
          });
        }, 3000);
      } else if (
        result.length !== 0 ||
        result.filter((item) => {
          return (
            item.name.toLowerCase().includes(search.toLowerCase()) !== false
          );
        }).length
      ) {
        setState({
          ...state,
          search: result.map((item) => {
            return { name: item.name, url: item.url };
          }),
        });
      }
    }
  };
  useEffect(() => {
    if (!search) {
      setState({
        ...state,
        search: [],
      });
    }
  }, [search]);
  return (
    <SearchContainer>
      <InputGroup>
        <Input
          type='search'
          placeholder='Search'
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Button onClick={searchPokemon} style={{ backgroundColor: "#ffcc00" }}>
          Buscar
        </Button>
      </InputGroup>
      <span>{state.error}</span>
    </SearchContainer>
  );
};

export default SearchInput;
