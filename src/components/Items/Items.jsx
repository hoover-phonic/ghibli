import React from 'react'
import styles from './items.module.css'

const Items=({item, term})=>{
  
  switch(term){
    
    case 'films':
      const {title, director, release_date, description}=item
      return(
        <div className={styles.container1}>
          <h2>{title}</h2>
          <h4>Director: {director}</h4>
          <div>Release Date: {release_date}</div>
          <div>{description}</div>
        </div>
      )
    case 'people':
      const {name, gender, hair_color, age}=item
      return(
        <div  className={styles.container2}>
          <h2>{name}</h2>
          <div>Gender: {gender}</div>
          <div>Age: {age}</div>
          <div>Hair Color: {hair_color}</div>
        </div>
      )
    case 'locations':
      const{ climate, terrain}=item
      return(
        <div className={styles.container3}>
          <h2>{item.name}</h2>
          <div>Terrain: {terrain}</div>
          
          <div>Climate: {climate}</div>
        </div>
      )
        
  }
}

export default Items