import React, { Component } from 'react';
import styled from "styled-components";


const menu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px auto 60px;
    background: red;
    height: 100%;
    
`;

class Menu extends Component {
    render() {
        return (
            <menu>
                This is Menu Component
            </menu>
        );
    }
}

export default Menu;
