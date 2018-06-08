import React, {Component} from 'react';
import styled from "styled-components";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from './HomeComponent';
import About from './AboutMeComponent';
import Portfolio from './PortfolioComponent'


const MenuT = styled.div`
        text-align : center;
        background : #AF3D4E;
        
`;

class Menu extends Component {
    render() {
        return (
                <MenuT>
                    <Link to="/">Home</Link><br/>
                    <Link to="/about">About Me</Link><br/>
                    <Link to="/portfolio">Portfolio</Link>
                </MenuT>
        );
    }
}

export default Menu;
