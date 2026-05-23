import styled from 'styled-components'

const Card = styled.article`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.brand};
  color: ${({ theme }) => theme.colors.cream};
`

const Image = styled.img`
  width: 100%;
  aspect-ratio: 304 / 167;
  object-fit: cover;
`

const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 900;
`

const Description = styled.p`
  min-height: 88px;
  margin: 0;
`

const Price = styled.strong`
  margin-top: auto;
`

const Button = styled.button`
  width: 100%;
  border: 0;
  padding: 8px;
  background: ${({ theme }) => theme.colors.cream};
  color: ${({ theme }) => theme.colors.brand};
  font-weight: 900;
`

function DishCard({ dish, onBuyClick }) {
  return (
    <Card>
      <Image src={dish.image} alt={dish.name} />
      <Title>{dish.name}</Title>
      <Description>{dish.description}</Description>
      <Price>{dish.price}</Price>
      <Button type="button" onClick={onBuyClick}>
        Comprar o produto
      </Button>
    </Card>
  )
}

export default DishCard
