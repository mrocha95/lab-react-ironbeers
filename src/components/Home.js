import React from 'react'
import {Link} from 'react-router-dom'
import Beers from '../assets/beers.png'
import NewBeer from '../assets/new-beer.png'
import RandomBeer from '../assets/random-beer.png'

function Home() {
  return (
    <div className="Home">
        <div>
            <img src={Beers} alt='beers'/>
            <h1>
            <Link to='/beers'>All Beers</Link>
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
            <img src={RandomBeer} alt='beers'/>
            <h1>
            <Link to='/random-beer'>Random Beer</Link>
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
            <img src={NewBeer} alt='beers'/>
            <h1>
            <Link to='/new-beer'>New Beer</Link>
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
  );
}

export default Home;
