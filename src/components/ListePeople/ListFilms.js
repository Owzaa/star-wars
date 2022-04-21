import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';



export const List = ({ films }) => {


  return (
    <>
      <h1>LISTED FILMS</h1> 
    {films.map((film,index) => (
      <Grid sx={{ flexGrow: 1, overflow: 'hidden', px: 1 }} spacing={1}  elevation={8} >
      <CardActionArea>
        
          <Card color="dark"  sx={{ maxWidth: 450 }}>
          

              
                < CardContent>
                

                  <div color="text.secondary" variant="inherit" component="body">
                    <p key={film.index} id="TitleText"><strong>{film.name}</strong> </p>
                    <p key={film.title} id="TitleTextContent">{film.title}</p>
                    <p key={film.release_date} id="TextContent">{film.release_date}</p>
                  </div>
                </CardContent>
              
          </Card>
     </CardActionArea>
      </Grid>   ))}

    </>
  )

}