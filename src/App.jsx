import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Cart from './components/Cart'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import GlobalStyle from './styles/GlobalStyle'
import { theme } from './styles/theme'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

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
            <Route path="/" element={<Home />} />
            <Route
              path="/restaurante/:id"
              element={<Restaurant onAddToCart={addToCart} />}
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
