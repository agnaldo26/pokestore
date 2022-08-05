import { useEffect, useState } from "react";
import { usePokemonList } from "../../context/context";
import { Button } from "./styles";
import MinicartItem from "../MinicartItem";
import {
  MinicartContainer,
  MinicartContent,
  MinicartFooter,
  MinicartHeader,
  MinicartListItem,
  MinicartListItems,
  MinicartTotalValue,
  CloseMinicart,
} from "./styles";

const Minicart = () => {
  const { state, setState } = usePokemonList();

  const [total, setTotal] = useState(0);

  const removePokemon = (index: number) => {
    const newCart = [...state.cart];
    newCart.splice(index, 1);
    setState({
      ...state,
      cart: newCart,
      isOpenMinicart: true,
    });
  };

  const sendOrderForm = () => {
    state.cart.length > 0
      ? setState({
          ...state,
          isOpenModal: true,
          isOpenMinicart: false,
          cart: [],
        })
      : alert("O carrinho está vazio");
  };

  const closeMinicart = () => {
    setState({
      ...state,
      isOpenMinicart: false,
    });
  };

  useEffect(() => {
    setTotal(
      state.cart.reduce((acc: number, curr: any) => acc + curr.price, 0)
    );
  }, [state.cart]);

  return (
    <MinicartContainer
      className={state.isOpenMinicart ? "is--open" : "is--closed"}
    >
      <MinicartContent>
        <MinicartHeader>
          <CloseMinicart onClick={closeMinicart}>x</CloseMinicart>
          <h3>
            Carrinho <span>({state.cart.length})</span>
          </h3>
        </MinicartHeader>

        <MinicartListItems>
          {state.cart.length > 0 ? (
            state.cart.map((item: any, index: number) => (
              <MinicartListItem key={index}>
                <MinicartItem
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
                <Button
                  onClick={() => removePokemon(index)}
                >
                  x
                </Button>
              </MinicartListItem>
            ))
          ) : (
            <p style={{ textAlign: "center", fontSize: "18px" }}>
              Carrinho vazio
            </p>
          )}
        </MinicartListItems>

        <MinicartFooter>
          <MinicartTotalValue>
            <span>Total</span>
            <span>R$ {total}</span>
          </MinicartTotalValue>
          <Button
            onClick={sendOrderForm}
            style={{ backgroundColor: "#ffcc00" }}
          >
            Finalizar Pedido
          </Button>
        </MinicartFooter>
      </MinicartContent>
    </MinicartContainer>
  );
};

export default Minicart;
