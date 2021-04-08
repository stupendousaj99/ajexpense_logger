import React from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Divider }  from '@material-ui/core';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List'; 

const Main = () => {
    const classes = useStyles();

    return (
        <Card className = {classes.root}>

        <CardHeader title = "Expense Tracker"  subheader = "Made by Ayush" />

        <CardContent>
        <Typography align = "center"  variant = "h5">Total Balance 100 Rs</Typography>
        <Typography variant = "subtitle1"  styles={{lineHeight:'1.5em', margin:'20px'}}>
        
        Try saying: Add income for 100 Rs in category salary for monday....
        </Typography>

        <Divider />
        <Form />
        </CardContent>

        <CardContent className={classes.CardContent}>
        <Grid container spacing={2}>
        <Grid item xs={12}>

           <List />

        </Grid>
        </Grid>

        </CardContent>
        </Card>
    )
}

export default Main;
