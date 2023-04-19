import { Box, Card, CardMedia, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import critic from '../../static/critic.jpg';
import {Send as SendIcon} from '@mui/icons-material'

const Rightbar = () => {
    return (
        <Box sx={{padding:2}}>
            <Typography variant="h5" align="center" mt={5}>
                HEY I AM SHAN!
            </Typography>
            <CardMedia 
                component={'img'} 
                height='300' 
                image={critic} 
                alt="Photo of Shan"
                sx={{
                    width:'400px', 
                    cursor:'pointer', 
                    "&hover":{
                        opacity:0.8,
                        boxSizing:'border-box',
                        zIndex:1,
                        transition:`all 0.50s ease`
                    },
                }}
                />
                <Typography variant="body1" align="left">
                    I love to eat!
                </Typography>
                <Typography variant="body1" align="left">
                    Like and Subscribe! <br />
                </Typography>
                <Card sx={{height:'200px', marginTop:2}}>
                    <Typography align='center' variant='body1'>
                        Ads here!
                    </Typography>
                </Card>
                <Typography align='center' color='white' bgcolor='#568203' mt={2} variant='body1'>
                        Subscribe via Email!
                </Typography>
                <Box sx={{pl:10}}>
                    <TextField label='Your Email Here!' variant="standard" color="warning" />
                    <IconButton>
                        <SendIcon sx={{color:'#568203'}} />
                    </IconButton>
                </Box>
                <Card sx={{height:'200px', marginTop:2}}>
                    <Typography align='center' variant='body1'>
                        Ads here!
                    </Typography>
                </Card>
        </Box>
    );
};

export default Rightbar