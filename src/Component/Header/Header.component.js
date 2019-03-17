import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import { withRouter, Redirect, Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import history from '../../history';
import styles from './Header.component.style';

class Header extends Component {
    render(){
        return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        News
                    </Typography>

                    <Link to="/" style={styles.button}>
                        <Button color="inherit">Headline</Button>
                    </Link>

                    <Link to="/politic" style={styles.button}>
                        <Button color="inherit">Politic</Button>
                    </Link>

                    <Button color="inherit">Economy</Button>
                    <Button color="inherit">Social</Button>
                </Toolbar>
            </AppBar>
        </div>
        )
    }
}

export default withRouter(Header)
