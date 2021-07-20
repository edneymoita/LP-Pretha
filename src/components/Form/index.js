import styled from 'styled-components'
// import BgImage from '../../../assets/image/background/background.png'

const Box = styled.div`
    display: grid;
    background-color: #e8d4b6;
    grid-template-columns: 60% 40%;
    align-items: center;
    grid-gap: 10px;
`

const SpaceLeft = styled.h2`
    font-size: 30px;
    color: #003d45;
    text-align: center;
`
const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: space-around;
    padding: 10px 10px 0px 10px;
    margin: 10px;
    font-size: 15px;
    font-weight: 600;
    color: #003d45;
    text-align: center;
    border-radius: 8px;
    border: 2px solid #003d45;
`

const InputBox = styled.input`
    margin: 5px 10px 10px 10px;
    height: 30px;
    width: auto;
    border: none;
`

const FormButton = styled.button`
    background-color: #f19a16;
    color:#003d45;
    border-radius: 1rem;
    height: 40px;
    margin: 10px 10px 0px 10px;
    font-size: medium;
    font-weight: 600;
`

const FormLabel = styled.label`
    text-align: left;
    margin: 10px 10px 0px 10px;
`

const Background = styled.div`
    background: url($BgImage) no-repeat;
`

function LPForm(){
    return (
        <>
            <Box>
                <SpaceLeft>
                    {/* Alguma Coisa */}
                </SpaceLeft>
                <Form>
                    <b>BAIXE AGORA</b>
                    Preencha e receba

                    <FormLabel htmlFor='nameBox'>Nome</FormLabel>
                    <InputBox type='text' id='nameBox' placeholder='Nome Completo'/>

                    <FormLabel htmlFor='emailBox'>E-mail</FormLabel>
                    <InputBox type='email' id='emailBox' placeholder='Endereço de E-mail'/>

                    <p><input type='checkbox' id='checkBox'/><FormLabel htmlFor='checkBox'>Concordo em receber comunicações da Pretha</FormLabel></p>

                    <FormButton>RECEBER GRATUITAMENTE</FormButton>
                    <h3 id='msg'></h3>
                </Form>
            </Box>
        </>
    )
  }
  
export default LPForm