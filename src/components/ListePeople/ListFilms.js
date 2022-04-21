import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
export const List = ({ films }) => {
  return(
  <div>
    <h1>LISTED FILMS</h1> 
 
       
    <Card sx={{ maxWidth: 450 }}>
   <CardActionArea>

  
  {films.map((film,id) => ( 
   
       <ul> 
 <CardContent>
            
    <Typography variant="inherit" component="paragrapgh">      
          <p key={id=film.id} id="TitleText"><strong>{film.name}</strong> </p>
           <p id="TitleTextContent">{film.title}</p> 
           <p id="TextContent">{film.release_date}</p> 
      </Typography>   
      
      </CardContent>
    </ul>  
         ) )}
  
 

    </CardActionArea>
  </Card>   

   </div> 
  )
}