import React from 'react';
import styled from 'styled-components';


const Layout = styled.div`
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-template-rows: 60px auto 60px;
    height: 100%;
    grid-template-areas : "h h h h h h h h h h h h"
                          "m m m c c c c c c c c c"
                          "f f f f f f f f f f f f";  
`;


function WrapperComponent({ children }) {
    return (
        <Layout>
            {children}
        </Layout>
    )
}

export default WrapperComponent