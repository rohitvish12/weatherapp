import { useEffect, useState } from 'react';
import { Box, TextField, Button, makeStyles } from '@material-ui/core';
import { getData } from '../server/api';
import Information from './Information';

const useStyles = makeStyles({
    text: {
        marginRight: 15,
    },
    component: {
        padding: 10,
    },
    button: {
        marginTop: 18,
    }
});

const Form = () => {
    const classes = useStyles();
    const [data, setWeatherData] = useState();
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [click, handleClick] = useState(false)


    useEffect(() => {
        const getWeather = async() =>{
            city && await getData(city, country).then(response => {
                setWeatherData(response.data);
                console.log(response.data);
            })
        }
        getWeather();
        handleClick(false);
    }, [click]);

    const handleCity = (value) => {
        setCity(value);
    } 

    const handleCountry = (value) => {
        setCountry(value);
    }

    return (
        <>
            
            <Box className={classes.component} >
                <TextField onChange={(e)=> handleCity(e.target.value)} className={classes.text} id="outlined-basic" label="City" variant="outlined" />
                <TextField onChange={(e)=> handleCountry(e.target.value)} className={classes.text} id="outlined-basic" label="Country" variant="outlined" />
                <Button onClick={()=>handleClick(true)} className={classes.button}  variant="outlined" >Get Weather</Button>
            </Box>
            <Information data={data} />
        </>
    )
}

export default Form;
