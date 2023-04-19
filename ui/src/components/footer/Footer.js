import { Box, Container, Stack, Typography, styled } from "@mui/material";
import React from "react";

const Footer = () => {

    const MenuBox = styled(Box)({
        display:'flex',
        gap:30,
        cursor:'pointer',
    }); //This is the box where MenuItems will be located

    const MenuItems = [
        {Name:'Home', Link:'#'},
        {Name:'Recipes', Link:'#'},
        {Name:'About Us', Link:'#'},
        {Name:'Subscribe', Link:'#'},
    ]; //These are the items placed on the menu navigation bar.

    return (
        <Box sx={{bgcolor:'#568203', height:'200px'}}>
            <Container>
                <Stack direction={'row'}>
                    <MenuBox flex={2} sx={{display:{xs:'none', md:'flex'}}}>
                        {MenuItems.map((item)=>(
                            <Typography variant="body2" color={'white'}>
                            {item.Name}
                            </Typography>
                        ))}
                    </MenuBox>
                    <Box flex={1} color={'white'} mt={1}>
                        Hope you have a hearty meal!
                    </Box>
                </Stack>
                <Typography variant="h4" align="center" mt={8} color={'white'}>
                            Everyone starts somewhere. Why not start now?
                </Typography>
            </Container>
        </Box>
    )
}

export default Footer