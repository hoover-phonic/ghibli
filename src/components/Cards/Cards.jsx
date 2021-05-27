import React from 'react'

import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import cx from 'classnames'
import styles from './Cards.module.css'

const Cards=({term, handleSelection})=>{



  return( <div className={styles.container}>
    <Grid container spacing={3} justify="center" onClick={()=>handleSelection(term)}>
      <Grid item component={Card} className={styles.card}>
        <Typography variant="h4">{term.charAt(0).toUpperCase()+term.slice(1)}</Typography>
      </Grid>
    </Grid>
  </div>)
}

export default Cards