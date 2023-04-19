import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PostsCard from "./PostsCard";
import axios from 'axios';

const Posts = () => {
    const [blog, setBlog] = useState([])

    useEffect( () => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blogs/`)
                setBlog(res.data)
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const [post, setPost] = useState([])

    useEffect( () => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/PopularPostsApiView/`)
          setPost(res.data)
        } catch (error) {
          console.log(error)
        }
      }
      fetchData()
    }, [])

    return (
        /*
        Typography is for the upper text of the Post js. Afterwards, the postscards
        placed in a grid that is column of nature. Each posts are in the item tag
        while there is only one container tag.
        */
        <Box>
            <Typography variant="h4" align="center">
            {" "}
            Latest Recipes{" "}
            </Typography>
            <Grid
                container
                columnSpacing={{ xs: 0, sm: 1, md: 1 }}
                direction={"column"}
            >
                {blog.map(post => (
                <Grid item xs>
                <PostsCard title={post.title} excerpt={post.excerpt} image={post.image} blogHref={`/details/${post.slug}`} myDirection={"flex"} />
                </Grid>
                ))
            
                }
            </Grid>
            <Typography
            variant='h4'
            bgcolor={"black"}
            color='white'
            align='center'
            mt={4}
            mb={4}
            >
                Most Popular
            </Typography>
            <Grid container columnSpacing={{xs:0, sm:1, md:1}} direction={'row'}>
            {post.map(popular => (
                <Grid item md={6} xs={12} sm={6}>
                <PostsCard title={popular.title} excerpt={popular.excerpt} image={`${process.env.REACT_APP_API_URL}${popular.image}`} myDirection={"block"} />
                </Grid>
                ))
            }
            </Grid>
            <Stack spacing={2} mt={3} mb={3} justifyContent="center" alignItems={'center'}>
                <Pagination count={10} variant="outlined" color={'warning'}/>
            </Stack>
        </Box>
    );
};

export default Posts