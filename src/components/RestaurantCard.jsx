import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.article`
  position: relative;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.brand};
  background: ${({ theme }) => theme.colors.paper};
`

const Cover = styled.img`
  width: 100%;
  aspect-ratio: 472 / 217;
  object-fit: cover;
`

const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
`

const Tag = styled.span`
  padding: 6px 8px;
  background: ${({ theme }) => theme.colors.brand};
  color: ${({ theme }) => theme.colors.cream};
  font-size: 12px;
  font-weight: 900;
`

const Content = styled.div`
  display: grid;
  flex: 1;
  gap: 16px;
  padding: 8px;
  color: ${({ theme }) => theme.colors.brand};
`

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 900;
`

const Rating = styled.span`
  font-size: 18px;
  font-weight: 900;
`

const Description = styled.p`
  margin: 0;
`

const Button = styled(Link)`
  justify-self: start;
  align-self: end;
  padding: 6px 8px;
  background: ${({ theme }) => theme.colors.brand};
  color: ${({ theme }) => theme.colors.cream};
  font-weight: 900;
`

function RestaurantCard({ restaurant }) {
  return (
    <Card>
      <Cover src={restaurant.cover} alt={restaurant.title} />
      <Tags>
        {restaurant.featured && <Tag>Destaque da semana</Tag>}
        <Tag>{restaurant.cuisine}</Tag>
      </Tags>
      <Content>
        <TitleRow>
          <Title>{restaurant.title}</Title>
          <Rating>{restaurant.rating} ★</Rating>
        </TitleRow>
        <Description>{restaurant.description}</Description>
        <Button to={`/restaurante/${restaurant.id}`}>Saiba mais</Button>
      </Content>
    </Card>
  )
}

export default RestaurantCard
