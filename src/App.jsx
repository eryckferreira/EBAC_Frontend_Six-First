import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Cart from './components/Cart'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import { fetchRestaurants } from './services/efoodApi'
import GlobalStyle from './styles/GlobalStyle'
import { theme } from './styles/theme'

function App() {
  const [restaurants, setRestaurants] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    fetchRestaurants({ signal: controller.signal })
      .then((items) => {
        setRestaurants(items)
        setError('')
      })
      .catch((requestError) => {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message)
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      })

    return () => controller.abort()
  }, [])

  function addToCart(dish) {
    setCartItems((items) => [...items, { ...dish, cartId: crypto.randomUUID() }])
    setIsCartOpen(true)
  }

  function removeFromCart(cartId) {
    setCartItems((items) => items.filter((item) => item.cartId !== cartId))
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header
          cartQuantity={cartItems.length}
          onCartClick={() => setIsCartOpen(true)}
        />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  restaurants={restaurants}
                  isLoading={isLoading}
                  error={error}
                />
              }
            />
            <Route
              path="/restaurante/:id"
              element={
                <Restaurant
                  restaurants={restaurants}
                  isLoading={isLoading}
                  error={error}
                  onAddToCart={addToCart}
                />
              }
            />
          </Routes>
        </main>
        <Cart
          items={cartItems}
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onRemove={removeFromCart}
        />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
