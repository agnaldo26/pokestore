import { ModalContainer } from "./styles";

interface ModalProps {
  children: JSX.Element,
}

const Modal = ({children}: ModalProps) => {
  return (
    <ModalContainer>
      {children}
    </ModalContainer>
  );
};

export default Modal;
