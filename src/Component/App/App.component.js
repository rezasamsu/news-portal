/**
 * Created by win7 on 16/03/2019.
 */
import React, { Component } from 'react';
import { Router, Route, withRouter } from 'react-router-dom';
import history from '../../history';

import Headline from '../Headline/Headline.component';
import PemiluNews from '../PemiluNews/PemiluNews.component';
import CorruptionNews from '../CorruptionNews/CorruptionNews.component';
import SocialNews from '../SocialNews/SocialNews.component';
import SportNews from '../SportNews/SportNews.component';

export default class App extends Component{
    render(){
        return (
            <Router history={history}>
                <Route exact path="/" component={Headline} />
                <Route path="/pemilu" component={PemiluNews} />
                <Route path="/korupsi" component={CorruptionNews} />
                <Route path="/social" component={SocialNews} />
            </Router>
        )
    }
}