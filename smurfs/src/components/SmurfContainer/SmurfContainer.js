import React from 'react';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 50px;
`;

const SmurfContainer = () => {
    return (
        <Container>
            <SmurfList />
            <SmurfForm />
        </Container>
    )
}

export default SmurfContainer;