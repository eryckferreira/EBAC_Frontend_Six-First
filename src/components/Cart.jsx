import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import {
  closeCart,
  removeItem,
  selectCartIsOpen,
  selectCartItems,
  selectCartTotal,
} from '../store/cartSlice'
import { formatPrice } from '../services/efoodApi'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  background: rgba(0, 0, 0, 0.72);
`

const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 11;
  width: min(360px, 100%);
  height: 100vh;
  padding: 32px 8px;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.brand};
  color: ${({ theme }) => theme.colors.cream};
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  transition: transform 0.2s ease;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
`

const Title = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 900;
`

const CloseButton = styled.button`
  border: 0;
  padding: 6px 8px;
  background: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.brand};
  font-weight: 900;
`

const List = styled.ul`
  display: grid;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`

const Item = styled.li`
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: 8px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.brand};
`

const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

const ItemInfo = styled.div`
  display: grid;
  align-content: start;
  gap: 8px;
`

const ItemName = styled.strong`
  font-size: 16px;
`

const ItemPrice = styled.span`
  font-size: 14px;
`

const RemoveButton = styled.button`
  align-self: end;
  border: 0;
  padding: 4px 6px;
  background: ${({ theme }) => theme.colors.brand};
  color: ${({ theme }) => theme.colors.cream};
  font-size: 12px;
  font-weight: 900;
`

const Empty = styled.p`
  margin: 24px 0 0;
`

const Total = styled.p`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin: 40px 0 16px;
  font-size: 14px;
  font-weight: 900;
`

const CheckoutButton = styled.button`
  width: 100%;
  border: 0;
  padding: 8px;
  background: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.brand};
  font-weight: 900;
`

function Cart() {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const isOpen = useSelector(selectCartIsOpen)
  const total = useSelector(selectCartTotal)

  function handleClose() {
    dispatch(closeCart())
  }

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={handleClose} />
      <Sidebar $isOpen={isOpen} aria-hidden={!isOpen}>
        <Header>
          <Title>Carrinho</Title>
          <CloseButton type="button" onClick={handleClose}>
            Fechar
          </CloseButton>
        </Header>

        {items.length === 0 ? (
          <Empty>Seu carrinho esta vazio.</Empty>
        ) : (
          <>
            <List>
              {items.map((item) => (
                <Item key={item.cartId}>
                  <Image src={item.image} alt={item.name} />
                  <ItemInfo>
                    <ItemName>{item.name}</ItemName>
                    <ItemPrice>{item.price}</ItemPrice>
                  </ItemInfo>
                  <RemoveButton
                    type="button"
                    onClick={() => dispatch(removeItem(item.cartId))}
                  >
                    Remover
                  </RemoveButton>
                </Item>
              ))}
            </List>
            <Total>
              <span>Valor total</span>
              <span>{formatPrice(total)}</span>
            </Total>
            <CheckoutButton type="button">
              Continuar com a entrega
            </CheckoutButton>
          </>
        )}
      </Sidebar>
    </>
  )
}

export default Cart
