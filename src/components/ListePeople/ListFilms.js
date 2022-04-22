import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import {styled, alpha} from "@mui/material/styles";


const Root = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const RootWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '10px',
}));
export const List = ({ films }) => {


  return (
    <>
      <h1>LISTED FILMS</h1> 
    {films.map((film) => (  
      <ul key={film.id}>
      
      <Grid  sx={{ flexGrow: 1, overflow: 'hidden', px: 1 }} spacing={1}  elevation={8} >
      <CardActionArea>
        
          <Card color="primary"  sx={{ maxWidth: 350 }}>
                      
                < CardContent className={RootWrapper}>
                

                
                   <h2> {film.title}</h2>
                    <p className="TitleTextContent" >{film.producer}</p>
                    <p  id="TextContent">{film.release_date}</p>
                
                </CardContent>
              
          </Card>
     </CardActionArea>
      </Grid>     </ul>   ))}

    </>
  )

}