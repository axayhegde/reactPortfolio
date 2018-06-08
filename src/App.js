import React, {Component} from 'react';
import './App.css';
import Menu from './component/menuComponent';
import Content from './component/contentComponent';
import Footer from './component/footerComponent';
import WrapperComponent from './global/wrapperComponent';

class App extends Component {
    render() {
        return (
            <div className="App">
                <WrapperComponent>
                    <Menu/>
                    <Content/>
                    <Footer/>
                </WrapperComponent>
            </div>
        );
    }
}

export default App;
