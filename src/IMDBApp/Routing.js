import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Movies from './Movies'
import MovieDetails from './MovieDetails'
import WatchList from './WatchList'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/watchlist' element={<WatchList />} />
        <Route path='/moviedetails/:id' element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default Routing
