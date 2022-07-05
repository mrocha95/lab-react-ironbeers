import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function SingleBeer() {

    const params = useParams()

    // console.log(params._id)

    const [singleBeer, setSingleBeer] = React.useState({})

    React.useEffect(function() {
        getBeer()
    }, [])

    const getBeer = async () => {
        let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params._id}`)
        setSingleBeer(response.data)
    }


    return(
      <div>
        <img src={singleBeer.image_url} alt='img' width='80px'/>
        <h2>{singleBeer.name}</h2>
        <p>{singleBeer.tagline}</p>
        <p>{singleBeer.first_brewed}</p>
        <p>{singleBeer.attenuation_level}</p>
        <p>{singleBeer.description}</p>
        <p>{singleBeer.contributed_by}</p>
      </div>
    )
  }
  
  export default SingleBeer;
