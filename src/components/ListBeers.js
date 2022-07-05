import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function ListBeers() {

    const [listBeers, setListBeers] = React.useState([])

    React.useEffect(function() {
        getBeer()
    }, [])

    const getBeer = async () => {
        let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
        setListBeers(response.data)
        // console.log(response.data)
    }

    return (
      <div className="ListBeers">
          {listBeers.map(function (beer){
            return (
              <div>
                <Link to={`/single-beer/${beer._id}`} >
                  <img src={beer.image_url} alt='img' width='80px'/>
                  <h2>{beer.name}</h2>
                </Link>
                <p>{beer.tagline}</p>
                <p><b>Created by:</b> {beer.contributed_by}</p>
                <hr></hr>
              </div>
            )
          }
          )}
      </div>
    );
  }
  
  export default ListBeers;
