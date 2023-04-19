import { Box, Stack, Typography, styled } from '@mui/material';
import snacks from '../../static/tunacups.jpg';
import breakfast from '../../static/tocino.jpg';
import lunch from '../../static/porkadobo.jpg';
import dinner from '../../static/tonkatsu.jpg';
import drinks from '../../static/buko.jpg';

const Suggestions = () => {

    const StyledCard = styled(Box)(({theme})=>({
        /*
            This portion defines the card of each category. The display is flex which will adjust and take up the whole space.
            The contents are always centered, the bg image does not repeat, the bg image is always center, the bg size is cover,
            and the height is 400px at medium screen and 200px at small. The radius of each is 100%, the overflow is hidden,
            and the width is 100px.
        */
        display:'flex',
        justifyContent:'center',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        overflow:'hidden',
        width:'100px',
        cursor:'pointer',
        //Theme.breakpoints just means that anythin above md screens, height is 100, otherwise 100.
        [theme.breakpoints.up('md')]:{
            height:100,
        },
        [theme.breakpoints.down('md')]:{
            height:100,
        },
        "&:hover":{
            /*
            This code is dedicated when you hover at the images.
            */
            opacity:0.8,
            boxSizing:'borderBox',
            zIndex:1,
            transition:`all 0.45s ease`,
        },
    }));

    const StyledTypography = styled(Typography)({
        /*
            This portion defines the title card of each category. We have center text align, the font color is #EEED09, the
            background color of the box is black, while the font size is 20px.
        */
        textAlign:'center',
        color:'black',
        fontSize:20,
    });

    const CardBox = styled(Box)({
        /*
            This is the portion of the code that defines the box of each of the category.
        */
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    });

    return (

        <Stack 
        Container direction={'row'} justifyContent='center' alignItems={'center'} mt={4} spacing={4} ml={3}
        sx={{maxWidth: "100%", overflow:'auto'}} 
        /*
            This stack container has a row direction, margin top of 4, spacing of 4, and margin
            left of 3. sx is also set to auto hidden so a bar will show up in case the
            categories become too much for a webpage to handle in one row or it becomes small
            screen. Before the container tag, we have justified the items in the stack
            to be space-between so everything will covered. Center justify or other justify
            methods won't work because the scrollbar will not work properly.
        */
        >
            <CardBox>
                <StyledCard sx={{backgroundImage:`url(${breakfast})`}} 
                /* 
                    Styledcard contains the background image of the category
                    while styledtypography contains the text of the category.
                */
                />
                <StyledTypography>Breakfast</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{backgroundImage:`url(${lunch})`}} />
                <StyledTypography>Lunch</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{backgroundImage:`url(${snacks})`}} />
                <StyledTypography>Snacks</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{backgroundImage:`url(${dinner})`}} />
                <StyledTypography>Dinner</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard sx={{backgroundImage:`url(${drinks})`}} />
                <StyledTypography>Drinks</StyledTypography>
            </CardBox>
        </Stack>
    );
};

export default Suggestions