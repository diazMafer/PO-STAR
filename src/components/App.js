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



const App = () => (
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
            <Link>Comenzar a aprender</Link>
        </Wrapper>
    </Container>
);

export default App;
