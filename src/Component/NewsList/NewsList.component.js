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
        const { url } = this.props
        axios.get(url)
            .then((response) => {
                const { articles } = response.data
                this.setState({
                    news: articles
                })
            })
    }

    render(){
        const { news } = this.state;
        return (
            <div>
                {news && news.map((news) => <NewsItem news={news}/>)}
            </div>
        )
    }

}