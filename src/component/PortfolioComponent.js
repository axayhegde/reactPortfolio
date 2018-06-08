import React, {Component} from 'react';
import styled from "styled-components";
import {keyframes} from "styled-components";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import {Link} from "react-router-dom";

const rotate360 = keyframes`
  from {
    -webkit-transform: scale(0.5);
  }

  to {
    -webkit-transform: scale(1);
  }
`;

const PortfolioT = styled.div`

        display: grid;
        grid-template-columns : 1fr 1fr;
        height : 100vh;
        background : #AF3D4E;
        animation: ${rotate360} 0.2s linear;
        overflow: auto;
        grid-gap : 10px;
        box-shadow : 5px;
        
`;
const StyledCard = styled.div`
display: grid;
        grid-template-columns : 1fr 1fr 1fr;
        background : white;
`;


class Portfolio extends Component {

    constructor() {
        super();
        this.state = {
            data: [],

        };

    }

    componentDidMount() {
        fetch('https://api.github.com/users/axayhegde/repos')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    data: json,
                });
            });
    }


    render() {
        return (
            <PortfolioT>
                {this.state.data.map((repo) => {
                    return (

                        <StyledCard>
                            {repo.name}
                            Url : <a href={repo.html_url} size="small">Learn More</a>
                        </StyledCard>
                    )
                })}
            </PortfolioT>
        );
    }
}

export default Portfolio;
