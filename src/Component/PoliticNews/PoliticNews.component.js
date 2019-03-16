/**
 * Created by win7 on 16/03/2019.
 */
import React, { Component } from 'react';

import NewsList from '../NewsList/NewsList.component';
import Header from '../Header/Header.component';

export default class PoliticNews extends Component {
    render(){
        return (
            <div>
                <Header/>
                <NewsList url="https://newsapi.org/v2/everything?q=politic&apiKey=17d26abf61334f41836703a683fb2fb4"/>
            </div>
        )
    }
}