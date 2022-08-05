import { ChildrenTypes, PokemonListProvider } from './context'

const GlobalContext = ({ children }: ChildrenTypes) => {
  return (
    <PokemonListProvider>
      {children}
    </PokemonListProvider>
  )
}

export default GlobalContext