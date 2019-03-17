import React, {Component} from 'react'
import {browserHistory} from 'react-router';
import {withRouter, Redirect, Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import history from '../../history';
import styles from './Header.component.style';

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" style={styles.header}>
                    <Toolbar>
                        <div>

                            <div style={styles.titleStyle}>
                                <Typography variant="h4" color="inherit">
                                    Reza Portal News <br/>
                                    <Typography variant="h5" color="inherit">
                                        Where news find you
                                    </Typography>
                                </Typography>
                            </div>

                            <Link to="/" style={styles.button}>
                                <Button color="inherit">Headline</Button>
                            </Link>

                            <Link to="/pemilu" style={styles.button}>
                                <Button color="inherit">Pemilu</Button>
                            </Link>

                            <Link to="/economy" style={styles.button}>
                                <Button color="inherit">Economy</Button>
                            </Link>

                            <Link to="/social" style={styles.button}>
                                <Button color="inherit">Social</Button>
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withRouter(Header)
