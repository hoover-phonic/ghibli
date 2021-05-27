import React from 'react'

import { Cards } from './components'
import { Items } from './components'
import styles from './App.module.css'
import { fetchdata } from './api'

import Image from './images/image.png'

class App extends React.Component {
  state = {
    terms: ['films', 'people', 'locations', 'species', 'vehicles'],
    data: [],
  }

  handleSelection = async (term) => {
    const fetchedData = await fetchdata(term)

    this.setState({ data: fetchedData.data })
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
        {this.state.data.map((item) => (
          <Items key={item.id} item={item} />
        ))}
      </div>
    )
  }
}
export default App
