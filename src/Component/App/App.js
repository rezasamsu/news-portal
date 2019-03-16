import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import styles from './App.component.style.js';
import Header from '../Header/Header.component.js';
import NewsItem from '../NewsItem/NewsItem.component';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        news: []
        }
      }

      componentDidMount(){
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=17d26abf61334f41836703a683fb2fb4')
            .then((response) => {
            this.setState({
                news: response.data.articles
            })
        })
      }

      render(){
        return (
           <div>
               {this.state.news && this.state.news.map((news) => <NewsItem news={news}/>)}
           </div>
        )
    }
}

export default App;