import Logo from "../Logo";
import SearchInput from "../SearchInput";
import { HeaderContainer } from "./styles";
import { usePokemonList } from "../../context/context";
import MinicartIcon from "../MinicartIcon";

const Header = () => {
  const { state, setState } = usePokemonList();

  const isOpenMinicart = () => {
    setState({
      ...state,
      isOpenMinicart: true,
    });
  };

  return (
    <>
      <HeaderContainer>
        <Logo />
        <SearchInput />
        <MinicartIcon onClick={isOpenMinicart} />
      </HeaderContainer>
    </>
  );
};

export default Header;
