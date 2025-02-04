import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { Youtube } from 'react-feather'
import { useDispatch } from 'react-redux'

const Movies = () => {
    const [movieList, setMovieList] = useState([])
    const dispatch = useDispatch()

    const url = 'https://dummyapi.online/api/movies';

    useEffect(()=>{
        getMoviesData()
    }, [])

    const getMoviesData = async ()  => {
        const {data} = await axios(`https://dummyapi.online/api/movies`)
        console.log(data);
        setMovieList(data);               
    } 
   
  return (
    <div className='bg-black'>
      <div className='container mb-5 py-5'>
        <div className='row row-cols-1 row-cols-md-5 g-4'>
          {
            movieList && movieList.length > 0 && movieList.map((list) => (
              <div className='col' key={list.id} >
              <Link to={`/moviedetails/${list.id}`} className='text-decoration-none'>
                <div className='card h-100'>
                  <img src={`/${list.image}`} className='card-img-top w-100 h-50 p-1' alt={list.movie} />                                 
                <div className='card-body'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <span className='card-rating text-warning fs-4'>★{list.rating}</span>
                  </div>
                  <h5 className='card-title'>{list.movie}</h5> <hr />
                  <div className='d-flex justify-content-center mt-4'>
                    <a href="#" className='btn btn-primary my-3 '>Watch options</a> 
                  </div>
                  <a href="#" className='btn btn-outline-secondary btn-trailer'>Trailer<Youtube size={16} /></a>
                </div>
                </div>
              </Link>
              </div>
            ))
          }

        </div>
      </div>

    </div>
  )
}        

export default Movies
