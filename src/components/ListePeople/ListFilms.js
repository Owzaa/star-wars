import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';



export const List = ({ films,props }) => {


  return (
    <>
      <h1>LISTED FILMS</h1> 
    {films.map((film,index) => (  
      <ul key={index}>
      
      <Grid  sx={{ flexGrow: 1, overflow: 'hidden', px: 2 }}   elevation={12} >
      <CardActionArea>
        
          <Card onClick={() => props.onClick(props.item)} className="cardContainer" color="primary"  sx={{ maxWidth: 350 }}>
                      
                < CardContent >
                

                
                <h2> {film.title}</h2>
                {film.producer}
                <br/>
                {film.release_date}
                
                </CardContent>
              
          </Card>
     </CardActionArea>
      </Grid>
           </ul>   ))}

    </>
  )

}