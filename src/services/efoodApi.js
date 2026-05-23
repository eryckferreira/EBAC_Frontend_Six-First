const API_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'

export function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

function normalizeDish(dish) {
  return {
    id: dish.id,
    name: dish.nome,
    image: dish.foto,
    description: dish.descricao,
    serving: dish.porcao,
    price: formatPrice(dish.preco),
    priceValue: dish.preco,
  }
}

function normalizeRestaurant(restaurant) {
  return {
    id: restaurant.id,
    title: restaurant.titulo,
    cuisine: restaurant.tipo,
    rating: restaurant.avaliacao,
    featured: restaurant.destacado,
    cover: restaurant.capa,
    description: restaurant.descricao,
    dishes: restaurant.cardapio.map(normalizeDish),
  }
}

export async function fetchRestaurants({ signal } = {}) {
  const response = await fetch(API_URL, { signal })

  if (!response.ok) {
    throw new Error('Nao foi possivel carregar os restaurantes.')
  }

  const restaurants = await response.json()
  return restaurants.map(normalizeRestaurant)
}
