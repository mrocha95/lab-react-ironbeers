import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function SingleBeer() {

    // const [randomBeer, setRandomBeer] = React.useState({})

    // React.useEffect(function() {
    //     getBeer()
    // }, [])

    // const getBeer = async () => {
    //     let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
    //     setRandomBeer(response.data)
    // }

    return(
      <div>
        <form>
            <h3>Name</h3>
            <input type="text" />
            <h3>Tagline</h3>
            <input type="text" />
            <h3>Description</h3>
            <input type="text" />
            <h3>First Brewed</h3>
            <input type="text" />
            <h3>Brewers Tips</h3>
            <input type="text" />
            <h3>Attenuation Level</h3>
            <input type="number" />
            <h3>Contributed By</h3>
            <input type="text" />

            <button>Add New</button>
        </form>
        
      </div>
    )
  }
  
  export default SingleBeer;
