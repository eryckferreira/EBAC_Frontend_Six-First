import styled from 'styled-components'

const FooterWrapper = styled.footer`
  margin-top: 80px;
  padding: 40px 16px;
  background: ${({ theme }) => theme.colors.line};
  color: ${({ theme }) => theme.colors.brand};
  text-align: center;
`

const Logo = styled.strong`
  display: block;
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1;
`

const Social = styled.nav`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 32px;
`

const SocialLink = styled.a`
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.brand};
  border-radius: 50%;
  font-size: 12px;
  font-weight: 900;
`

const Text = styled.p`
  width: min(480px, 100%);
  margin: 0 auto;
  font-size: 10px;
`

function Footer() {
  return (
    <FooterWrapper>
      <Logo>efood</Logo>
      <Social aria-label="Redes sociais">
        <SocialLink href="https://instagram.com" target="_blank" rel="noreferrer">
          ig
        </SocialLink>
        <SocialLink href="https://facebook.com" target="_blank" rel="noreferrer">
          fb
        </SocialLink>
        <SocialLink href="https://twitter.com" target="_blank" rel="noreferrer">
          tw
        </SocialLink>
      </Social>
      <Text>
        A efood e uma plataforma para divulgacao de estabelecimentos. A
        responsabilidade pela entrega e qualidade dos produtos e toda do
        restaurante contratado.
      </Text>
    </FooterWrapper>
  )
}

export default Footer
