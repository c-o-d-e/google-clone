import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

function Home() {
    return (
        <Container>
            <h1>Home</h1>
        </Container>
    );
}

export default Home;
