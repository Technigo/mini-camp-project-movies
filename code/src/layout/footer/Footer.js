import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      padding: theme.spacing(4),
      textAlign: 'center',
      marginTop: 15
    }
}));


export const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="body1">
                        Lukasiak | Movies
                    </Typography>
                </Grid>
            </Grid>
        </footer>
    )
}