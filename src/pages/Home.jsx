import styled from 'styled-components'

import RestaurantCard from '../components/RestaurantCard'
import { restaurants } from '../data/restaurants'

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

function Home() {
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
