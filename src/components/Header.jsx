import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const HeaderBar = styled.header`
  background:
    linear-gradient(rgba(255, 248, 242, 0.9), rgba(255, 248, 242, 0.9)),
    url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1600&q=80')
      center/cover;
  color: ${({ theme }) => theme.colors.text};
`

const Navigation = styled.div`
  min-height: ${({ $home }) => ($home ? '384px' : '186px')};
  display: grid;
  align-content: ${({ $home }) => ($home ? 'center' : 'space-between')};
  gap: 48px;
  padding: 40px 0;
  text-align: center;

  @media (max-width: 640px) {
    min-height: ${({ $home }) => ($home ? '320px' : '164px')};
    padding: 28px 0;
  }
`

const TopLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ $home }) => ($home ? 'center' : 'space-between')};
  gap: 24px;
  font-size: 18px;
  font-weight: 900;

  @media (max-width: 640px) {
    flex-direction: ${({ $home }) => ($home ? 'column' : 'row')};
    font-size: 14px;
  }
`

const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.brand};
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1;
`

const CartButton = styled.button`
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.brand};
  font-weight: 900;
`

const HeroTitle = styled.h1`
  width: min(540px, 100%);
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.brand};
  font-size: 36px;
  font-weight: 900;
  line-height: 1.17;

  @media (max-width: 640px) {
    font-size: 28px;
  }
`

function Header({ cartQuantity, onCartClick }) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <HeaderBar>
      <Navigation className="container" $home={isHome}>
        <TopLine $home={isHome}>
          {!isHome && <Link to="/">Restaurantes</Link>}
          <Logo to="/">efood</Logo>
          {!isHome && (
            <CartButton type="button" onClick={onCartClick}>
              {cartQuantity} produto(s) no carrinho
            </CartButton>
          )}
        </TopLine>

        {isHome && (
          <HeroTitle>Viva experiencias gastronomicas no conforto da sua casa</HeroTitle>
        )}
      </Navigation>
    </HeaderBar>
  )
}

export default Header
