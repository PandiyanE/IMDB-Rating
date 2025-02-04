import React from 'react'
import { useSelector } from 'react-redux'

const WatchList = () => {
    const {id, movie, image} = useSelector((state) => state.watchListData)
    console.log(id, movie, image);
    
  return (
    <div>
      <h2>WatchList</h2> 

    </div>
  )
}

export default WatchList
