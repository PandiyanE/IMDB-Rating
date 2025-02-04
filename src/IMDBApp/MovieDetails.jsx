import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'react-feather'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Star } from 'react-feather'
import { Plus } from 'react-feather'
import { add } from '../Redux/watchReducers'
import '../IMDBApp/MovieDetails'

const MovieDetails = () => {
  const[moviedetails, setMovieDetails] = useState({})
  const [added, setAdded] = useState(false)
  const {id} = useParams() 
  const navigate = useNavigate()
  const dispatch = useDispatch()
  console.log(id); 

  useEffect(()=>{
    getmovieDetails()
  }, [])

  const handleAdd = (moviedetails) => {
    dispatch(add(moviedetails))
    setAdded(!added)
  }

  const getmovieDetails = async () => {
    const {data} = await axios(`https://dummyapi.online/api/movies/${id}`)
    console.log(data);
    setMovieDetails(data);
  }

  const image = moviedetails.image;
  console.log(image);
    
  return (
    <div className='text-start'>
      <h2>MovieDetails</h2>
      <ArrowLeft size={25} onClick={()=>{navigate(-1)}} />
      <div className='d-flex mt-s justify-content-around border mx-5'>
        <div className='col-6 p-5 fw-bold text-align-center'>
        <div className='img-card ms-2' style={{ width: '500px', height: '380px'}}>
          <img src={`../${image}`} alt={moviedetails.movie} className='h-100 w-100' />
          <p className=' text-center mt-3 ms-5'>Tittle:{moviedetails.movie}</p>
        </div>
        </div>

        <div className='col-6'>
          <h4 className='mt-4 fw-bold'>{moviedetails.movie}</h4>
          <p className='fs-4 fw-bold mt-4'>Rating: 
          <span className='text-warning fs-4 fw-bold'><Star size={20}/>
          {moviedetails.rating}</span></p>
          <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus explicabo modi. Numquam quaerat quia dolorum voluptas porro perferendis autem earum alias a libero vel, non saepe enim tenetur consequuntur?</p>
          <button className='btn btn-warning fw-bold fs-5 mt-4' onClick={()=> handleAdd(moviedetails)}>
           {added? 'Added' : 'Add to WatchList'} <Plus size={20} /></button>

          <Link className=''>
            <p className='mt-4'>{moviedetails. imdb_url}</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
