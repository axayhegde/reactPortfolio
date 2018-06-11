import React, {Component} from 'react';
import styled from "styled-components";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Button from '@material-ui/core/Button';


const MenuT = styled.div`
        display : grid;
        background : #AF3D4E;
        grid-template-columns : 1fr;
        grid-template-rows : 1fr 1fr 1fr;
        border : 1px solid black;

`;

const StyledLink = styled(Link)`
        color : white;
        text-decoration: none;
        justify-self: center;
        align-self : center;
        
`;

class Menu extends Component {
    render() {
        return (
                <MenuT>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/about">About Me</StyledLink>
                    <StyledLink to="/portfolio">GitHub Projects</StyledLink>
                </MenuT>
        );
    }
}

export default Menu;
