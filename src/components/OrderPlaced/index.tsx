import { usePokemonList } from "../../context/context";
import { Button } from "./styles";
import Modal from "../Modal";
import { CloseModal, OrderPlacedContainer } from "./styles";

const OrderPlaced = () => {
  const { state, setState } = usePokemonList();
  const closeModal = () => {
    setState({
      ...state,
      isOpenModal: false,
    });
  };

  return state.isOpenModal ? (
    <Modal>
      <OrderPlacedContainer>
        <CloseModal onClick={closeModal}>x</CloseModal>
        <h3>Compra realizada com sucesso 🎉</h3>
        <Button onClick={closeModal} style={{ backgroundColor: "#ffcc00" }}>
          Voltar às compras
        </Button>
      </OrderPlacedContainer>
    </Modal>
  ) : null;
};

export default OrderPlaced;
