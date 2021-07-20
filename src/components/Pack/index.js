import styled from "styled-components"
import Image from 'next/image'
import calendPerma from '../../../assets/image/elements/calendario-permanente.png'
import cardapioSemanal from '../../../assets/image/elements/cardapio-semanal.png'
import controleHab from '../../../assets/image/elements/controle-de-habitos.png'
import diarioLeitura from '../../../assets/image/elements/diario-de-leituras.png'
import planejDiario from '../../../assets/image/elements/planejador-diario.png'

const PackBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #973155;
    color: #ffffff;
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
    padding: 20px 0px 0px 0px;
`

const PackContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;;
    justify-content: space-evenly;
    // margin-bottom: 30px;
    padding: 20px 0px 20px 0px;
`
const TextLn1 = styled.p`
    color: #f19a16;
`

const TextLn2 = styled.p`
    color: #ffffff;
`

function Pack(){
    return (
        <PackBox>
            <p>O QUE TEM NO PACK</p>
            <p>O QUE VOCÊ VAI GANHAR:</p>

            <PackContent>
                <div>
                    <figure>
                    <Image 
                        src={calendPerma} 
                        alt='Calendário Permanente'
                        width={100}
                        height={100}
                    />
                    </figure>
                    <figcaption>
                        <TextLn1>Calendário</TextLn1>
                        <TextLn2>Permanente</TextLn2>
                    </figcaption>
                </div>
                <div>
                    <figure>
                    <Image 
                        src={cardapioSemanal} 
                        alt='Cardápio Semanal'
                        width={100}
                        height={100}
                    />
                    </figure>
                    <figcaption>
                        <TextLn1>Cardário</TextLn1>
                        <TextLn2>Semanal</TextLn2>
                    </figcaption>
                </div>
                <div>
                    <figure>
                    <Image 
                        src={controleHab} 
                        alt='Controle de Hábitos'
                        width={100}
                        height={100}
                    />
                    </figure>
                    <figcaption>
                        <TextLn1>Controle</TextLn1>
                        <TextLn2>de Hábitos</TextLn2>
                    </figcaption>
                </div>
            </PackContent>

            <PackContent>
                <div>
                    <figure>
                        <Image 
                            src={diarioLeitura} 
                            alt='Diário de Leitura'
                            width={100}
                            height={100}
                        />
                    </figure>
                    <figcaption>
                        <TextLn1>Diário</TextLn1>
                        <TextLn2>de Leitura</TextLn2>
                    </figcaption>
                </div>
                <div>
                    <figure>
                        <Image 
                            src={planejDiario} 
                            alt='Planejador Diário'
                            width={100}
                            height={100}
                        />
                    </figure>
                    <figcaption>
                        <TextLn1>Planejador</TextLn1>
                        <TextLn2>Diário</TextLn2>
                    </figcaption>
                </div>
            </PackContent>
        </PackBox>
    )
}

export default Pack