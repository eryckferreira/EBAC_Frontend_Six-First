import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

import DishCard from '../components/DishCard'
import ProductModal from '../components/ProductModal'

const Hero = styled.section`
  position: relative;
  min-height: 280px;
  display: flex;
  align-items: end;
  margin-bottom: 56px;
  background:
    linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)),
    url('${({ $image }) => $image}') center/cover;
  color: #ffffff;
`

const HeroContent = styled.div`
  display: grid;
  gap: 120px;
  padding: 24px 0 32px;
`

const Cuisine = styled.span`
  font-size: 32px;
  font-weight: 100;

  @media (max-width: 640px) {
    font-size: 24px;
  }
`

const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 900;

  @media (max-width: 640px) {
    font-size: 26px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const Empty = styled.section`
  padding: 80px 0;
  color: ${({ theme }) => theme.colors.brand};
`

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 16px;
  padding: 8px 10px;
  background: ${({ theme }) => theme.colors.brand};
  color: ${({ theme }) => theme.colors.cream};
  font-weight: 900;
`

function Restaurant({ restaurants, isLoading, error, onAddToCart }) {
  const { id } = useParams()
  const [selectedDish, setSelectedDish] = useState(null)

  if (isLoading) {
    return (
      <Empty className="container">
        <h1>Carregando restaurante...</h1>
      </Empty>
    )
  }

  if (error) {
    return (
      <Empty className="container">
        <h1>{error}</h1>
        <BackLink to="/">Voltar para restaurantes</BackLink>
      </Empty>
    )
  }

  const restaurant = restaurants.find((item) => item.id === Number(id))

  if (!restaurant) {
    return (
      <Empty className="container">
        <h1>Restaurante nao encontrado</h1>
        <p>Volte para a lista e escolha uma das opcoes disponiveis.</p>
        <BackLink to="/">Ver restaurantes</BackLink>
      </Empty>
    )
  }

  return (
    <>
      <Hero $image={restaurant.cover}>
        <HeroContent className="container">
          <Cuisine>{restaurant.cuisine}</Cuisine>
          <Title>{restaurant.title}</Title>
        </HeroContent>
      </Hero>

      <Grid className="container">
        {restaurant.dishes.map((dish) => (
          <DishCard
            key={dish.id}
            dish={dish}
            onBuyClick={() => setSelectedDish(dish)}
          />
        ))}
      </Grid>

      <ProductModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToCart={onAddToCart}
      />
    </>
  )
}

export default Restaurant
