import styled from 'styled-components'
import Image from 'next/image'
import logoPretha from '../../../assets/image/logo/logo-pretha.png'

const Banner = styled.div`
    display: grid;
    background-color: #570b20;
    grid-template-columns: 60% 40%;
    align-items: center;
    justify-content: center;
`

const BannerTitle = styled.h2`
    font-size: 30px;
    color: #f19a16;
    align-text: center;
    
`
const BannerLogo =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

function TopBanner(){
    return (
        <>
            <Banner>
                <BannerTitle>
                    {/* É promoção que você quer?!?! */}
                </BannerTitle>
                <BannerLogo>
                    <Image src={logoPretha} alt='Logo Pretha Estúdio Criativo'/>
                </BannerLogo>
            </Banner>
        </>
    )
  }
  
export default TopBanner  