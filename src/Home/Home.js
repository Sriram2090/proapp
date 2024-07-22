import React from "react";

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';


import "./Home.css"
 
function Home() {
   
    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      });

    return (
        <body>
             
        <div class="background">
    
        <nav class="navbarbackground">
            <ul class="nav-list">
                <div class="logo">
                    <img src="https://www.ealixir.com/wp-content/themes/ealixir-2019/assets/press_release_logo/debate.png"/>
                </div>
                <li>
                    <a href="#courses">Home</a>
                </li>
                <li>
                    <a href="#tutorials">Explore Latest Issue</a>
                </li>
                <li>
                    <a href="#jobs">Explore Science</a>
                </li>
                <li>
                    <a href="#student">Explore Space</a>
                </li>
                <li>
                    <a href="#student">Ebook</a>
                </li>
               
            </ul>

            <div class="rightNav">
                <button class="btn btn-sm">Login</button>
                <button class="btn btn-sm">
                    Sign in
                </button>
                


            </div>
            
          
        </nav>
       <fieldset className="fi">
        <center>

        <h1 className="h">The real online debating experience</h1>
        <br/> 
      
         
       <b> <h9>DebateIsland is a unique and growing community committed to the idea of </h9>
        <br/> 
        <h9>exchanging views and perspectives through debating.</h9></b>
        </center>
     </fieldset>
<br/>

<center>
               <b><h1>Features</h1></b>
</center>
<br/>
<br/>

    <center>
    <h10> The best feature that we offer is an incredible community of smart and </h10>
<br/>
    <h10>interesting people, but there is more ...</h10>
    </center>
<br/>
<br/>
<br/>
    <div style={{display:"flex",justifyContent:"space-evenly",marginBottom:"20px",}}>
    <Paper style={{width:"30%",marginRight:"10px"}}>
      <Grid container spacing={2} className="card">
        <Grid item style={{marginLeft:"20px"}}>
          <ButtonBase sx={{ width: 65, height: 65, marginTop:"20px" }}>
            <Img alt="complex" src="https://www.debateart.com/images/main-page/debates-feature-4e64d1016898d3d65d251ea0c94dbf0f.svg?vsn=d" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
             <b> Debates</b>
              </Typography>
              <Typography variant="body2" gutterBottom>
              One-on-one debates with a large diversity of settings for 
              <br/>
              ultimate flexibility
              </Typography>
             
            </Grid>
           
          </Grid>
          
        </Grid>
      </Grid>
    </Paper>
    
    <br/>
    <Paper style={{width:"30%",marginRight:"10px"}}>
      <Grid container spacing={2} className="card" >
        <Grid item style={{marginLeft:"20px"}}>
          <ButtonBase sx={{ width: 65, height: 65, marginTop:"20px",marginBottom:"20px"}}>
            <Img alt="complex" src="https://www.debateart.com/images/main-page/forum-feature-59e1fcf55c0f5359af9a785ade825d86.svg?vsn=d" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container >
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                <b>Forum</b>
              </Typography>
              <Typography variant="body2" gutterBottom>
              A classic forum with all familiar features for those who prefer
              <br/>
               discussions without formats
              </Typography>
             
            </Grid>
          
          </Grid>
        
        </Grid>
      </Grid>
    </Paper>
</div>
    <br/>
    <div style={{display:"flex",justifyContent:"space-evenly",}}>
    <Paper style={{width:"30%",marginRight:"10px"}}>
      <Grid container spacing={2} className="card">
        <Grid item style={{marginLeft:"20px"}}>
          <ButtonBase sx={{ width: 65, height: 65, marginTop:"20px",marginBottom:'20px', }}>
            <Img alt="complex" src="https://www.debateart.com/images/main-page/leaderboards-feature-f1f9031d63f2ce00d438993f9026e0a1.svg?vsn=d" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
             <b> Leaderboards</b>
              </Typography>
              <Typography variant="body2" gutterBottom>
                
Informative leaderboards for raising the competitive spirit and
<br/>
 inflating egos, but mostly the latter
              </Typography>
             
            </Grid>
           
          </Grid>
         
        </Grid>
      </Grid>
    </Paper>
    
    <br/>
    <Paper style={{width:"30%",marginRight:"10px"}}>
      <Grid container spacing={2} className="card">
        <Grid item style={{marginLeft:"20px"}}>
          <ButtonBase sx={{  width: 65, height: 65, marginTop:"20px",marginBottom:"20px" }}>
            <Img alt="complex" src="https://www.debateart.com/images/main-page/messages-feature-f6473c3685a86a51e671e4d13feaf564.svg?vsn=d" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              <b>Private messaging</b>
              </Typography>
              <Typography variant="body2" gutterBottom>
                
Simple real-time messaging system for private communication 
<br/>
between the members
              </Typography>
             
            </Grid>
           
          </Grid>
         
        </Grid>
      </Grid>
    </Paper>
</div>

<br/>
    <div style={{display:"flex",justifyContent:"space-evenly",}}>
    <Paper style={{width:"30%",marginRight:"10px"}}>
      <Grid container spacing={2} className="card">
        <Grid item style={{marginLeft:"20px"}}>
          <ButtonBase sx={{  width: 65, height: 65, marginTop:"20px",marginBottom:"20px"}}>
            <Img alt="complex" src="https://www.debateart.com/images/main-page/medals-feature-783f88a5c91428fe91a069944b4c7a80.svg?vsn=d" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              <b>Achievements</b>
              </Typography>
              <Typography variant="body2" gutterBottom>
A powerful medal rewarding system, as if having only 
<br/>
leaderboards is not enough
              
              </Typography>
             
            </Grid>
           
          </Grid>
         
        </Grid>
      </Grid>
    </Paper>
    
    <br/>
    <Paper style={{width:"30%",marginRight:"10px"}}>
      <Grid container spacing={2} className="card">
        <Grid item style={{marginLeft:"20px"}}>
          <ButtonBase sx={{  width: 65, height: 65, marginTop:"20px",marginBottom:"20px" }}>
            <Img alt="complex" src="https://www.debateart.com/images/main-page/friends-feature-0b0f27c4dda8debe97b9f4dc544afc11.svg?vsn=d" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              <b>Friends</b>
              </Typography>
              <Typography variant="body2" gutterBottom>
The ability to add friends and always stay up to date with their 
<br/>
achievements and activities
               
              </Typography>
             
            </Grid>
           
          </Grid>
         
        </Grid>
      </Grid>
    </Paper>
</div>
       
<br/>
<br/>
    

<br/>
<center>
<h1>What makes us different?</h1>
<br/>
<br/>
<h12>
There are a lot of aspects to building a great website, and providing all the 
<br/>
necessary features is but one of them. That is why we made it our mission to go 
<br/>
far beyond that and create something truly exceptional.
</h12>
<br/>
</center>
<br/>
<br/>
<br/>
 <div style={{display:"flex",justifyContent:"space-evenly"}}>

<Card sx={{ maxWidth: 300 }} className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
         
          image="https://th.bing.com/th/id/OIP.GlGbi0m99dflTG137OPawwHaEK?pid=ImgDet&w=200&h=112&c=7&dpr=1.3"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <b>Community-driven</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Due to being completely independent, we have the ultimate freedom to set our own goals and priorities, that is why the community plays such an important role in the project's development
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 300 }} className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="https://www.48hourslogo.com/48hourslogo_data/2020/07/30/99488_1596123234.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <b>Moderation</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
To meet the highest standards of content quality, a team of community-approved moderators works day and night to make sure that intellectual discussions stay intellectual
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


    <Card sx={{ maxWidth: 300 }} className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="https://th.bing.com/th/id/OIP.7XZVLcvbmL4gY_Geg_kTSQHaEK?pid=ImgDet&w=200&h=112&c=7&dpr=1.3"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <b>Active development</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
We embrace the fact that the world is changing rapidly and to remain relevant and competitive, we tirelessly work on adding new and improving existing features
           
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

</div>
<br/>
<br/>
<br/>

<footer className="footer">
            <p className="text-footer">
               DEBATEISLAND.COM | The Best Online Debate Experience!
                <br/>
© 2023 DebateIsland.com, all rights reserved. DebateIsland.com | The Best Online Debate Experience! Debate
                <br/>

topics you care about in a friendly and fun way. Come try us out now. We are totally free!
               
            </p>
        </footer>

    </div>
    </body>
);
}

export default Home;