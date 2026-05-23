import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { addItem } from '../store/cartSlice'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 20;
  display: grid;
  place-items: center;
  padding: 24px 16px;
  background: rgba(0, 0, 0, 0.72);
`

const Modal = styled.article`
  position: relative;
  width: min(100%, ${({ theme }) => theme.layout.container});
  max-height: calc(100vh - 48px);
  display: grid;
  grid-template-columns: minmax(280px, 1fr) 1.45fr;
  gap: 24px;
  padding: 32px;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.brand};
  color: ${({ theme }) => theme.colors.cream};

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    padding: 24px;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.cream};
  font-size: 20px;
  font-weight: 900;
  line-height: 1;
`

const Image = styled.img`
  width: 100%;
  aspect-ratio: 280 / 280;
  object-fit: cover;
`

const Content = styled.div`
  display: grid;
  align-content: start;
  gap: 16px;
`

const Title = styled.h2`
  margin: 0;
  padding-right: 24px;
  font-size: 18px;
  font-weight: 900;
`

const Text = styled.p`
  margin: 0;
`

const Button = styled.button`
  justify-self: start;
  border: 0;
  padding: 8px 10px;
  background: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.brand};
  font-weight: 900;

  @media (max-width: 420px) {
    width: 100%;
  }
`

function ProductModal({ dish, onClose }) {
  const dispatch = useDispatch()

  if (!dish) {
    return null
  }

  function handleAddToCart() {
    dispatch(addItem(dish))
    onClose()
  }

  return (
    <Overlay onClick={onClose}>
      <Modal
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-title"
        onClick={(event) => event.stopPropagation()}
      >
        <CloseButton type="button" onClick={onClose} aria-label="Fechar">
          x
        </CloseButton>
        <Image src={dish.image} alt={dish.name} />
        <Content>
          <Title id="product-title">{dish.name}</Title>
          <Text>{dish.description}</Text>
          <Text>Serve: {dish.serving}</Text>
          <Button type="button" onClick={handleAddToCart}>
            Adicionar ao carrinho - {dish.price}
          </Button>
        </Content>
      </Modal>
    </Overlay>
  )
}

export default ProductModal
