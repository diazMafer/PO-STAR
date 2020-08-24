import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-family: 'Patrick Hand SC', sans-serif;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 25%;
`;

const Title = styled.h1`
    color: #0083ff;
    font-size: 3.5rem;
    font-weight: 700;
    text-transform: uppercase;
`;

const SubTitle = styled.h1`
    color: #2d4379;
    font-size: 3.7rem;
    font-weight: 700;
    text-transform: uppercase;
`;

const Paragraph = styled.p`
    color: #7483a9;
    font-size: 1.5rem;
    width: 600px;
    text-transform: uppercase;
`;


const Image = styled.img`
    position: absolute;
    width: 200px;
    top: -30px;
    margin-left: 15px;
`;



const App = () => (
    <div>
        <Image 
        src="https://media-private.canva.com/5Kfro/MAEFW25Kfro/1/s.png?response-expires=Mon%2C%2024%20Aug%202020%2001%3A29%3A44%20GMT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200823T224711Z&X-Amz-SignedHeaders=host&X-Amz-Expires=9752&X-Amz-Credential=AKIAJJATJK7JCUD446NA%2F20200823%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4b3430d71fbcd24d08035ac3ca3fe06dbbf2505416d7ac71bbf68a3b857f3853"
        />
        <Container>
            <Wrapper>
                <Title>
                    APRENDE LAS MEJORES PRÁCTICAS SOBRE
                </Title>
                <SubTitle>
                    Administración de proyectos
                </SubTitle>
                
                <Paragraph>Incrementa tus conociminetos sobre la administración de negocios a través de juegos interactivos.
                    Inicia Sesión y lleva control de tus avances en tu cuenta.</Paragraph>
                <Link style={{background: '#0083ff', color: '#fff'}}>comenzar a aprender</Link>
            </Wrapper>
        </Container>
    </div>
);

export default App;
