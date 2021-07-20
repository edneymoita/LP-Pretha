import styled from "styled-components"
import download from '../../../assets/image/elements/download.png'
import Image from "next/image"

const FooterBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #570b20;
    align-items: center;
    justify-content: space-around;
    color: #ffffff;
    padding: 20px 0px 20px 0px;
`

const FooterDownload = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #e8d4b6;
    align-items: center;
    justify-content: space-evenly;
    color: #003d45;
    font-weight: 600;
    padding: 20px 0px 20px 0px;
`
function Footer(){
    return (
        <>
            <FooterBox>
                <p>O QUE ESTÁ ESPERANDO PARA ORGANIZAR A SUA ROTINA</p>
                <p>BAIXE O PACK E APROVEITE TODAS AS FERRAMENTAS DISPONÍVEIS</p>
            </FooterBox>
            <FooterDownload>
                <Image
                        src={download}
                        alt='Download Pack'
                        width={100}
                        height={100}
                    />
                <p>FAÇA AGORA MESMO O DOWNLOAD!</p>
                <p>100% GRATUITO</p>
            </FooterDownload>
        </>
    )
}

export default Footer