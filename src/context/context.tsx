import React, { createContext, useContext, useEffect, useState } from "react";
import { getPokemons } from "../api/request";

const DEFAULT_VALUE = {
  state: {
    dataPokemon: {
      count: 0,
      next: "",
      previous: null,
      results: [],
    },
    pokemonList: [
      {
        id: 0,
        name: "",
        image: "",
        price: 0,
        stock: 0,
      },
    ],
    cart: [],
    search: [],
    error: "",
    isOpenMinicart: false,
    isOpenModal: false,
  },
  setState: () => {},
};

type DefaultValuesProps = {
  state: {
    dataPokemon: dataPokemonTypes;
    pokemonList: Array<PokemonItemTypes>;
    cart: Array<PokemonItemTypes>;
    search: Array<retultPokemonTypes>;
    error: string;
    isOpenMinicart: boolean;
    isOpenModal: boolean;
  };
  setState: (state: any) => void;
};

export type PokemonItemTypes = {
  id: number;
  name: string;
  image: string;
  price: number;
  stock?: number;
};

type dataPokemonTypes = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<retultPokemonTypes>;
};

type retultPokemonTypes = {
  name: string;
  url: string;
};

export type ChildrenTypes = {
  children: React.ReactNode;
};

const PokemonListContext = createContext<DefaultValuesProps>(DEFAULT_VALUE);

const PokemonListProvider = ({ children }: ChildrenTypes) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  useEffect(() => {
    getPokemons(`https://pokeapi.co/api/v2/pokemon?limit=60`).then((res) => {
      setState({
        ...state,
        dataPokemon: res,
      });
    });
    state.dataPokemon.results.map((item: any) => {
      getPokemons(item.url).then((pokemon: any) => {
        const data = {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.front_default,
          price: pokemon.base_experience,
          stock: 10,
        };

        setState({
          ...state,
          pokemonList: [...state.pokemonList, data],
        });
      });
    });
  }, []);

  return (
    <PokemonListContext.Provider value={{ state, setState }}>
      {children}
    </PokemonListContext.Provider>
  );
};

const usePokemonList = () => useContext(PokemonListContext);

export { PokemonListProvider, usePokemonList };
