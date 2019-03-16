import React, {Component, View} from 'react';
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
		return (
		<Card style={styles.card} onClick={() => window.open(this.state.news.url)}>
			<div>
				<CardMedia
					style={styles.cover}
					image={this.state.news.urlToImage}
				/>
			</div>
			<div style={styles.details}>
				<CardContent style={styles.content}>
					<Typography component="h5" variant="h5">
						{this.state.news.title}
					</Typography>
					<Typography component="h5" variant="subtitle1">
						{this.state.news.description}
					</Typography>
					<Typography variant="p"/>
					{convertTime(this.state.news.publishedAt)}
				</CardContent>
			</div>
		</Card>
		)
	}
}