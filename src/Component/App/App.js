import React, { Component } from 'react';
import './App.css';
import styles from './App.component.style.js';
import NewsItem from '../NewsItem/NewsItem.component';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        news: {
            source: {
                id: "the-new-york-times",
                name: "The New York Times"
            },
            author: "DAVID LEONHARDT",
            title: "The Experts Keep Getting the Economy Wrong",
            description: "Traders at the New York Stock Exchange on Friday. The week ended on a down note after a disappointing jobs report.",
            url: "https://www.nytimes.com/2019/03/10/opinion/us-economy-stagnation-growth.html",
            urlToImage: "https://static01.nyt.com/images/2019/03/10/opinion/10leonhardt-promo/10leonhardt-promo-facebookJumbo.png",
            publishedAt: "2019-03-10T23:14:57Z",
            content: "Beside a lack of competition, the investment slump stems from what Summers calls the de-massification of the economy. Developers arent building as many malls and stores, because goods now go straight from warehouses to homes. Offices dont need as much storage… [+1924 chars]"
        },
        }
      }

      render(){
      return (
          <NewsItem news={this.state.news}/>
      )
      }
    }

export default App;
