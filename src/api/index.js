import axios from 'axios'

const url = 'https://ghibliapi.herokuapp.com/'

export const fetchdata = async (term) => {
  try {
    const response = await axios.get(`${url}${term}`, {
      params: {
        limit: 10,
      },
    })

    return response
  } catch (error) {
    console.log(error)
  }
}
