import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

export const List = ({ films }) => {

  const { DataisLoaded, items } = this.state;
  if (!DataisLoaded) return <>
    <h4> Please kindly wait while we fetch your Film List [Data] .... </h4> </>;
  return (
    <div>
      <h1>LISTED FILMS</h1>
      <Grid sx={{ flexGrow: 1, overflow: 'hidden', px: 1 }} spacing={3} >
        {films.map((film, id) => (
          <Card row sx={{ maxWidth: 450 }}>
            <CardActionArea>

              <ul>
                < CardContent>

                  <Typography variant="inherit" component="body">
                    <p key={id = film.id} id="TitleText"><strong>{film.name}</strong> </p>
                    <p id="TitleTextContent">{film.title}</p>
                    <p id="TextContent">{film.release_date}</p>
                  </Typography>
                </CardContent>
              </ul>
            </CardActionArea>
          </Card>
        ))}

      </Grid>
    </div>
  )
}