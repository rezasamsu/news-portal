import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Headline from '../Headline/Headline.component';
import PoliticNews  from '../PoliticNews/PoliticNews.component';
import EconomyNews from '../EconomyNews/EconomyNews.component';
import SocialNews from '../SocialNews/SocialNews.component';

export default class Header extends Component {
    render(){
        return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        News
                    </Typography>
                    <Button color="inherit">Headline</Button>
                    <Button color="inherit">Politic</Button>
                    <Button color="inherit">Economy</Button>
                    <Button color="inherit">Social</Button>
                </Toolbar>
            </AppBar>
        </div>
        )
    }
}