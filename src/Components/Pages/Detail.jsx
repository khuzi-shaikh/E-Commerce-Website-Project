import { Grid } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

export const Detail = () => {
    const location = useLocation()
    const data = location.state
    console.log(data);
  return (
    <React.Fragment>
        <Grid container>
          <Grid item xs={6}>
            <img src={data.image} alt="" />
            </Grid>
          <Grid item xs={6}>
            <h1>Title : {data.title}</h1>
            <h3>Description : {data.description}</h3>
          </Grid>
        </Grid>
    </React.Fragment>
  )
}
