import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import feastImg from '../../assets/images/barria-feast1.jpeg'
import { useNavigate } from 'react-router-dom';

/* Color Palette:
    paleSand: #F4EDE2
    black: #111313
    darkBlue: #202C59 
    darkRed: #942828
    darkOrange: #F18805
    lightOrange: #F0A202
    */ 

const useStyles = makeStyles(({
    root: {
        position: 'relative',
        width: '100%',
        height: '125vh',
        '@media (max-width: 600px) and (max-width: 900px)': {
            top: '10%',
            height: '100vh',
            // left: '25%',
        },
    },
    media: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        margin: 'auto',
        borderRadius:'3px',
        border: '1px solid #F18805',
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
        zIndex: 1,
        '@media (max-width: 600px) and (max-width: 900px)': {
            // top: '5%',
            height: '100vh',
            width: '125vh',
        },
    },
    welcomeCard: {
        position: 'absolute',
        top: '25%',
        left: '25%',
        '@media (max-width: 600px) and (max-width: 900px)': {
            top: '50%',
            left: '50%',
            width: '100%',
            height: 'auto',
        },
        transform: 'translate(-50%, -50%)',
        width: '40%',
        height: 'auto',
        padding: 20,
        backgroundColor: 'rgba(251, 255, 244, 0.7)',
        border: '3px solid #F18805',
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
        transition: 'opacity 2s ease-in-out',
        opacity: props => props.opacity ? 1 : 0,
        zIndex: 200,
    },
    navCard: {
        position: 'absolute',
        top: '60%',
        left: '25%',
        '@media (max-width: 600px) and (max-width: 900px)': {
            top: '125vh',
            left: '50%',
            width: '100%',
        },
        transform: 'translate(-50%, -50%)',
        width: '40%',
        height: 'auto',
        padding: 20,
        backgroundColor: 'rgba(251, 255, 244, 0.7)',
        border: '3px solid #F18805',
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
        transition: 'opacity 2s ease-in-out',
        opacity: props => props.opacity ? 1 : 0,
        zIndex: 200,
    },
    customBlack: {
        color: '#111313',
    },
    customDarkBlue: {
        color: '#202C59',
    },
    customDarkRed: {
        color: '#942828',
    },
    customDarkOrange: {
        color: '#F18805',
    },
    customLightOrange: {
        color: '#F0A202',
    },
}));

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const classes = useStyles({ opacity: isVisible });
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 10);
        return () => clearTimeout(timer);
    }, []);


    const goToMenu = () => {
        navigate('/menu');
    }
    const goToFestivalMenu = () => {
        navigate('/festivalmenu');
    }
    const goToPopupMenu = () => {
        navigate('/popupmenu');
    }


    return (
     
      <Grid container className={classes.root}>
              <Grid item xs={12} >
            <CardMedia
                className={classes.media}
                image={feastImg}
                title="Barria Taco Feast"
            />
           </Grid>
              <Grid item xs={12}>
            <Card className={classes.welcomeCard}>
                <CardContent>
                    <Typography gutterBottom className={classes.customDarkRed} variant="h5" component="h2">
                        We Are So Happy You're Here!
                    </Typography>
                    <Typography variant="body2" className={classes.customDarkBlue} component="p">
                        We are a family owned and operated business that 
                        is proud to serve the best birria tacos in NEW ENGLAND! 
                        We are so happy you're here and we can't wait to 
                        serve you!
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card class={classes.navCard}>
                <Button size="small" color="primary" onClick={goToMenu}>
                    View Our Menu
                </Button>
                <br />
                <Button size="small" color="primary" onClick={goToFestivalMenu}>
                    Festival Menu(FOR BUILD ONLY-DELETE LINK LATER)
                </Button>
                <br />
                <Button size="small" color="primary" onClick={goToPopupMenu}>
                    Popup Menu(FOR BUILD ONLY-DELETE LINK LATER)
                </Button>
                <br />
                <Button size="small" color="primary">
                    Contact Us
                </Button>
                <br />
                <Button size="small" color="primary">
                   Visit Our Instagram!
                </Button>
                <br />
                <Button size="small" color="primary">
                    Share Us With Friends!
                </Button>
                <br />
                <Button size="small" color="primary">
                    Share Us With Friends!
                </Button>
                <br />
            </Card>
            </Grid>
       
        </Grid>
    );
}









// const useStyles = makeStyles({
//     card: {
//         margin: 20,
       
//     },
//     media: {
//         height: 500,
//         boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
//     },
//     textbox: {
//         padding: 20,
//         border: '3px solid rgba(241, 136, 5)',
//         boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
//     }
// });

// export default function Home() {
//     const classes = useStyles();

//     return(
//         <Grid container>
//             <Grid item xs={12} md={6}>
//         <Card className={classes.card}>
//             <CardMedia
//                     className={classes.media}
//                     image={feastImg}
//                     title="Title of the Image"
//                 />
//                 </Card>
//             </Grid>
//             <Grid item xs={12} md={6}>
//             <Card className={classes.textbox}>
//                 <CardContent >
//                     <Typography gutterBottom variant="h5" component="h2">
//                         Welcome Card
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" component="p">
//                         Description of the Card
//                     </Typography>
//                 </CardContent>
//             <Button size="small" color="primary">
//                 Share
//             </Button>
//             <Button size="small" color="primary">
//                 Learn More
//             </Button>
//             </Card>
//             </Grid>
//             </Grid>
//     )
// }

// NOTES ON ADDING INSTA:
// Yes, you can build a card that links to a user's Instagram and shows the last post made. However, accessing Instagram data requires using the Instagram Graph API, which requires authentication and permissions.

// Here’s a step-by-step guide to achieve this:

// 1. **Set Up Instagram Graph API:**
//    - Create a Facebook Developer account and set up an Instagram Basic Display App.
//    - Get the access token and permissions to read the user's Instagram data.

// 2. **Fetch the Latest Post:**
//    - Use the Instagram Graph API to fetch the latest post from the user's Instagram account.

// 3. **Display the Post in a Card:**
//    - Use Material-UI to create a card component that displays the latest post.

// ### Step 1: Set Up Instagram Graph API
// Follow the [Instagram Basic Display API documentation](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started) to set up your app and get the access token.

// ### Step 2: Fetch the Latest Post
// Create a function to fetch the latest post using the Instagram Graph API. You can use `fetch` or `axios` to make the API request.

// ```javascript
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   card: {
//     maxWidth: 345,
//     margin: 'auto',
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
// });

// const InstagramCard = ({ accessToken, userId }) => {
//   const classes = useStyles();
//   const [latestPost, setLatestPost] = useState(null);

//   useEffect(() => {
//     const fetchLatestPost = async () => {
//       try {
//         const response = await axios.get(
//           `https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,permalink,timestamp&access_token=${accessToken}`
//         );
//         const posts = response.data.data;
//         if (posts.length > 0) {
//           setLatestPost(posts[0]);
//         }
//       } catch (error) {
//         console.error('Error fetching Instagram post:', error);
//       }
//     };

//     fetchLatestPost();
//   }, [accessToken, userId]);

//   if (!latestPost) {
//     return <Typography>Loading...</Typography>;
//   }

//   return (
//     <Card className={classes.card}>
//       <CardMedia
//         className={classes.media}
//         image={latestPost.media_url}
//         title={latestPost.caption}
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           {latestPost.caption}
//         </Typography>
//         <Button
//           size="small"
//           color="primary"
//           href={latestPost.permalink}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           View on Instagram
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

// export default InstagramCard;
// ```

// ### Step 3: Use the InstagramCard Component
// Use the `InstagramCard` component in your application, passing the `accessToken` and `userId` as props.

// ```jsx
// import React from 'react';
// import InstagramCard from './InstagramCard';

// const Home = () => {
 

//  const

//  accessToken = 'YOUR_INSTAGRAM_ACCESS_TOKEN';
//   const userId = 'YOUR_INSTAGRAM_USER_ID';

//   return (
//     <div>
//       <h1>Welcome to My Website</h1>
//       <InstagramCard accessToken={accessToken} userId={userId} />
//     </div>
//   );
// };

// export default Home;
// ```

// ### Notes:
// - Replace `YOUR_INSTAGRAM_ACCESS_TOKEN` and `YOUR_INSTAGRAM_USER_ID` with your actual Instagram access token and user ID.
// - Ensure you handle the authentication and token refresh process as required by the Instagram Graph API.
// - This example assumes you have already set up the Instagram Basic Display API and obtained the necessary permissions and access tokens.

// By following these steps, you can create a card that links to a user's Instagram and shows the latest post made.