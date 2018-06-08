import React, {Component} from 'react';
import styled from "styled-components";
import {keyframes} from "styled-components";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';

const rotate360 = keyframes`
  from {
    -webkit-transform: scale(0.5);
  }

  to {
    -webkit-transform: scale(1);
  }
`;

const PortfolioT = styled.div`
        height : 100%;
        background : #FFF59D;
        animation: ${rotate360} 0.5s linear;
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
                        <Card>
                            <CardContent>
                                <Typography variant="headline" component="h2">
                                    {repo.name}
                                </Typography>
                                <CardActions>
                                    <a href={repo.html_url} size="small">Learn More</a>
                                </CardActions>

                            </CardContent>
                        </Card>
                    )
                })}
            </PortfolioT>
        );
    }
}

export default Portfolio;
