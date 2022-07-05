import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import ListBeers from './components/ListBeers'
import SingleBeer from './components/SingleBeer'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import icon from './assets/home.png'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>
        <img src={icon} alt='icon' width='80px'/>
        </Link>
        
      </nav>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/beers' element={<ListBeers />} />
      <Route path='/single-beer/:_id' element={<SingleBeer />} />
      <Route path='/random-beer' element={<RandomBeer />} />
      <Route path='/new-beer' element={<NewBeer />} />
    </Routes>
    </div>
  );
}

export default App;
