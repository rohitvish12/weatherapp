
import {Typography, Box, makeStyles} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FlareIcon from '@material-ui/icons/Flare';
import OpacityIcon from '@material-ui/icons/Opacity';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';


const useStyles = makeStyles({
    component:{
        margin:50,
    },
    row:{
        padding:10,
        fontSize:20,
        letterSpacing:2,
        
    },
    icon:{
        marginRight:15,
        color:"darked"
    },
    value:{
        fontWeight:700,
    }
})


const Information = ({data}) => {
    const classes = useStyles();
    return(
        data ? 
        <Box className={classes.component} >
            <Typography className={classes.row} > <LocationOnIcon className={classes.icon} /> Location :<Box className={classes.value} component="span" > {data.name}, {data.sys.country}</Box></Typography>
            <Typography className={classes.row}><FlareIcon className={classes.icon}/> temperature : <Box className={classes.value} component="span" >{data.main.temp}°C</Box> </Typography>
            <Typography className={classes.row}><OpacityIcon className={classes.icon}/> Humidity :<Box className={classes.value} component="span" > {data.main.humidity}%</Box></Typography>
            <Typography className={classes.row}><Brightness5Icon className={classes.icon}/> sunrise :<Box className={classes.value} component="span" > {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</Box></Typography>
            <Typography className={classes.row}><BrightnessMediumIcon className={classes.icon}/> sunset :<Box className={classes.value} component="span" >{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</Box></Typography>
            <Typography className={classes.row}><DehazeIcon className={classes.icon}/> condition : <Box className={classes.value} component="span" >{data.weather[0].description}</Box></Typography>
            <Typography className={classes.row}><CloudQueueIcon className={classes.icon}/> clouds :<Box className={classes.value} component="span" >{data.clouds.all}%</Box></Typography>
        </Box>: ''
    )
}

export default Information;