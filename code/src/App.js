import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Menu } from './layout/menu/Menu';
import { Footer } from './layout/footer/Footer';
import { TopRated } from './scenes/top-rated/TopRated';
import { Popular } from './scenes/popular/Popular';
import { Movie } from './scenes/movie/Movie';

const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: 15
    }
}));

export const App = () => {
    const classes = useStyles();

    return (
        <BrowserRouter>
            <Menu />
            <Container className={classes.container}>
                <Switch>
                    <Route path="/popular">
                        <Popular />
                    </Route>
                    <Route path="/top-rated">
                        <TopRated />
                    </Route>
                    <Route path="/movie/:id">
                        <Movie />
                    </Route>
                    <Route path="/" exact>
                        <Redirect to="/popular" />
                    </Route>
                </Switch>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}