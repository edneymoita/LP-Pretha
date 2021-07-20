import styled from 'styled-components'
import TopBanner from '../src/components/TopBanner'
import LPForm from '../src/components/Form'
import Pack from '../src/components/Pack'
import Footer from '../src/components/Footer'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
export default function Home() {
  return (
    <>
      <TopBanner />
      <LPForm />
      <Pack />
      <Footer />
    </>
  )
}
