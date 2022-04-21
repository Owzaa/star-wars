import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';



export const List = ({ films }) => {


  return (
    <>
      <h1>LISTED FILMS</h1>  {films.map((film,id) => (
      <Grid sx={{ flexGrow: 1, overflow: 'hidden', px: 1 }} spacing={1} >
      <CardActionArea>
        
          <Card  color="danger" elevation={8}   sx={{ maxWidth: 450 }}>
          

              
                < CardContent>
                

                  <Typography color="text.secondary" variant="inherit" component="body">
                    <p key={id = films} id="TitleText"><strong>{film.name}</strong> </p>
                    <p id="TitleTextContent">{film.title}</p>
                    <p id="TextContent">{film.release_date}</p>
                  </Typography>
                </CardContent>
              
          </Card>
     </CardActionArea>
      </Grid>   ))}

    </>
  )

}