import React from 'react'

import { Cards } from './components'
import { Items } from './components'
import styles from './App.module.css'
import { fetchdata } from './api'

import Image from './images/image.png'

class App extends React.Component {
  state = {
    terms: ['films', 'people', 'locations'],
    data: [],
    selectedterm: '',
  }

  handleSelection = async (term) => {
    const fetchedData = await fetchdata(term)

    this.setState({ data: fetchedData.data, selectedterm: term })

    console.log(this.state)
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <img className={styles.image} src={Image} alt="Studio Ghibli" />
        </div>
        <div className={styles.card}>
          {this.state.terms.map((term, i) => (
            <Cards key={i} term={term} handleSelection={this.handleSelection} />
          ))}
        </div>
        <div className={styles.itemContainer}>
          {this.state.data.map((item) => (
            <Items key={item.id} item={item} term={this.state.selectedterm} />
          ))}
        </div>
      </div>
    )
  }
}
export default App
