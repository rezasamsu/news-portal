import React, { Component } from 'react';

import NewsList from '../NewsList/NewsList.component';
import Header from '../Header/Header.component';

export default class Headline extends Component {
      render(){
        return (
           <div>
               <Header/>
               <NewsList url="https://newsapi.org/v2/top-headlines?country=us&apiKey=17d26abf61334f41836703a683fb2fb4"/>
           </div>
        )
    }
}

