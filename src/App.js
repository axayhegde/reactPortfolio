import React, {Component} from 'react';
import './App.css';
import Menu from './component/MenuComponent';
import Home from './component/HomeComponent';
import About from './component/AboutMe';
import styled from "styled-components";
import Portfolio from "./component/PortfolioComponent";
import {BrowserRouter as Router, Route} from "react-router-dom";


const Layout = styled.div`
    display : grid;
    height:100vh;
    grid-template-columns : 2fr 8fr;
`;

class App extends Component {

    render() {
        return (
            <Router>
                <Layout>
                    <Menu/>
                    <switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/portfolio" component={Portfolio}/>
                        <Route path="/about" component={About}/>

                    </switch>
                </Layout>
            </Router>
        );
    }
}

export default App;
