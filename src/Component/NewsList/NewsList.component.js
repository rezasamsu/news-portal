/**
 * Created by win7 on 16/03/2019.
 */
import React, { Component } from 'react';
import axios from 'axios';

import NewsItem from '../NewsItem/NewsItem.component';

export default class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }

    componentDidMount(){
        axios.get(this.props.url)
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