import React, {Component} from 'react';
import './App.css';
import Menu from './component/MenuComponent';
import Footer from './component/FooterComponent';
import WrapperComponent from './global/wrapperComponent';
import Home from './component/HomeComponent';
import About from './component/AboutMeComponent';
import styled from "styled-components";
import Portfolio from "./component/PortfolioComponent";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


const Layout = styled.div`
    display : grid;
    height:100vh;
    grid-template-columns : 2fr 8fr;
    grid-template-rows: 9fr 1fr;
`;

/*const FooterLayout = styled.div`
    display : grid;
    border: 1px solid black;
`;

const ParentLayout = styled.div`
    display : grid;
    grid-gap : 5px
    grid-template-rows : 8fr 2fr;
`;*/

class App extends Component {



    render() {
        return (
            <Router>
                <Layout>
                    <Menu/>
                    <switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/portfolio" component={Portfolio}/>
                        {/*<Route render={() => <div>404</div>}/>*/}
                    </switch>
                    <Footer/>
                </Layout>
            </Router>
        );
    }
}

export default App;
