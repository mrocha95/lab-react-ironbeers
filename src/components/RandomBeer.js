import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function SingleBeer() {

    const [randomBeer, setRandomBeer] = React.useState({})

    React.useEffect(function() {
        getBeer()
    }, [])

    const getBeer = async () => {
        let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        setRandomBeer(response.data)
    }

    return(
      <div>
        <img src={randomBeer.image_url} alt='img' width='80px'/>
        <h2>{randomBeer.name}</h2>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
      </div>
    )
  }
  
  export default SingleBeer;
