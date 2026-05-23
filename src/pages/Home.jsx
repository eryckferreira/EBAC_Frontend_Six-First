import styled from 'styled-components'

import RestaurantCard from '../components/RestaurantCard'

const Section = styled.section`
  padding-top: 80px;

  @media (max-width: 640px) {
    padding-top: 48px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 48px 80px;

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

const Message = styled.p`
  color: ${({ theme }) => theme.colors.brand};
  font-size: 18px;
  font-weight: 900;
`

function Home({ restaurants, isLoading, error }) {
  if (isLoading) {
    return (
      <Section className="container">
        <Message>Carregando restaurantes...</Message>
      </Section>
    )
  }

  if (error) {
    return (
      <Section className="container">
        <Message>{error}</Message>
      </Section>
    )
  }

  return (
    <Section>
      <Grid className="container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </Grid>
    </Section>
  )
}

export default Home
