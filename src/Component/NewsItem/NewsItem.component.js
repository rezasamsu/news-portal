import React, {Component, View} from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import styles from './NewsItem.component.style.js';
import convertTime from '../../Utils/convertTime';

export default class NewsItem extends Component {
	constructor(props) {
        super(props);
        this.state = {
            news: this.props.news
        };
    }

    render()
		{
		    const { news } = this.state
		return (
		<Card style={styles.card}>
			<div>
				<CardMedia
					style={styles.cover}
					image={news.urlToImage}
				/>
			</div>
			<div style={styles.details}>
				<CardContent style={styles.content}>
					<a href={news.url} target="_blank">
					<Typography component="h5" variant="h5">
						{news.title}
					</Typography>
					</a>

					<Typography component="h5" variant="subtitle1">
                        {news.description}
					</Typography>
					<Typography variant="p"/>
					{convertTime(news.publishedAt)}
				</CardContent>
			</div>
		</Card>
		)
	}
}