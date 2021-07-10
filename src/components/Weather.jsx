
import {Box, Grid , Typography, makeStyles } from '@material-ui/core';
import Form from './Form';

const useStyles = makeStyles({
    card:{
        height:"100vh",
        width:"70%",
        display:"flex",
        alignItems:"center",
        margin: '0 auto ',
        justifyContent:"center"
    },
    box:{
        // background:"linear-gradient(to bottom , #03b6fc, #b1e1f0)",
        height:"80%",
        width:"80%"
    }
})

const Weather =() =>{
    const classes = useStyles();
    return (
        <Box  className={classes.card}>
            <Box className={classes.box}>
                <Form/>
            </Box>
        </Box>
    )
}

export default  Weather;