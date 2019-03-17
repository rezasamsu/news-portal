/**
 * Created by win7 on 16/03/2019.
 */
import React, { Component } from 'react';
import { Router, Route, withRouter } from 'react-router-dom';
import history from '../../history';

import Headline from '../Headline/Headline.component';
import PoliticNews from '../PoliticNews/PoliticNews.component';
import EconomyNews from '../EconomyNews/EconomyNews.component';
import SocialNews from '../SocialNews/SocialNews.component';
import SportNews from '../SportNews/SportNews.component';

export default class App extends Component{
    render(){
        return (
            <Router history={history}>
                <Route exact path="/" component={Headline} />
                <Route path="/politic" component={PoliticNews} />
                <Route path="/economy" component={EconomyNews} />
                <Route path="/social" component={SocialNews} />
                <Route path="/sport" component={SportNews} />
            </Router>
        )
    }
}