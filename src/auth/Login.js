import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
background: darkgray;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
`
const Card = styled.div`
background: lightgray;
height: 700px;
width: 40%;
border-radius: 10px;
`

const Title = styled.div`
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
height: 90px;
font-size: 30px;
`

const EmailF = styled.div`
border: 1px solid black;
height: 20vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`

const EmailTitle = styled.h1`
    padding: 10px;
`

const Email = styled.input`
width: 70%;
height: 30px;
`

const PasswordF = styled.div`
border: 1px solid black;
height: 20vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`

const PasswordTitle = styled.h1`
    padding: 10px;
`

const Password = styled.input`
width: 70%;
height: 30px;
`

const Button = styled.button`
 padding: 10px 30px;
`

const ButtonBox = styled.div`
border: 1px solid black;
height: 34%;
display: flex;
justify-content: center;
align-items: center;
`

const Login = () => {
    return (
        <Main>
            <Card>
            <Title>Login to ChoreMe!</Title>
            <EmailF>
                <EmailTitle>Enter your email:</EmailTitle>
            <Email></Email>
            </EmailF>
            <PasswordF>
                <PasswordTitle>Enter your password:</PasswordTitle>
            <Password></Password>
            </PasswordF>
            <ButtonBox>
            <Button>Login</Button>
            </ButtonBox>
            </Card>
            
        </Main>
    )
}

export default Login
