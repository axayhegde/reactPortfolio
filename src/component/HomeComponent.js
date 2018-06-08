import React, {Component} from 'react';
import styled from "styled-components";
import {keyframes} from "styled-components";
import * as firebase from 'firebase';
import './HomeComponent.css';
import Icon from '@material-ui/core/Icon';
const rotate360 = keyframes`
  from {
    scale:0;
    -webkit-transform: scale(0.5);
  }

  to {
    scale:1;
    -webkit-transform: scale(1);
  }
`;

const HomeT = styled.div`
        height:100%;
        background : #FF8A65;
        animation: ${rotate360} 0.5s linear;
`;

class Home extends Component {

    constructor() {
        super();

        this.state = {
            name: 'Loading from FireBase...'
        }
    }

    componentDidMount() {
        const rootRef = firebase.database().ref().child('name');
        rootRef.on('value', snap => {
            console.log('db stuff', snap.val());
            this.setState({
                name: snap.val()
            });
        });
    }

    render() {
        return (
            <HomeT>
                {/*This is Home! {this.state.name}*/}
                <main>

                    <div className="intro">Hello, I'm Akshay!</div>
                    <div className="tagline">Full Stack Developer | Photographer</div>
                    <div className="icons-social">
                        <a target="www.github.com/axayhegde" href="https://github.com/axayhegde"><i className="fab fa-github"></i></a>
                        <a target="https://www.linkedin.com/in/akshayheg/" href="https://www.linkedin.com/in/akshayheg/"><Icon>star</Icon></a>
                    </div>

                </main>
            </HomeT>
        );
    }
}

export default Home;
