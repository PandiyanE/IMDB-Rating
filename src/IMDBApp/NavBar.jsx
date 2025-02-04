import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
           <nav class="navbar navbar-light bg-dark">
           <div className="col-2">
                <a href="" className='btn btn-warning fw-bold'>IMDB</a>
                <button className='btn btn-dark ms-2 fw-bold'>Menu</button>
           </div>
           <div className="col-6">
           <form class="d-flex">
            <select name="" id="" className='btn btn-light fw-bold'>
                <option value="" >All</option>
                <option value="" >Title</option>
                <option value="" >TV Eposides</option>
                <option value="" >Celebs</option>
                <option value="" >Companies</option>
                <option value="" >Keywords</option>
            </select>
            <input class="form-control me-2" type="search" placeholder="Search IMDB" aria-label="Search" />
           </form>
           </div> 
           <div className="col-4 d-flex">
                <li>
                    <a href="" className='btn btn-dark fw-bold'>IMDB
                    <span className='text-info fw-bold'>Pro</span></a>
                </li>
                <li>
                    <Link to='/watchlist' href="#" className='btn btn-dark fw-bold'>Watchlist</Link>
                </li>
                <li>
                    <a href="" className='btn btn-dark fw-bold'>Sign In</a>
                </li>
                <select name="" id="" className='btn btn-dark fw-bold'>
                <option value="" >EN</option>
                <option value="" >TA</option>
                <option value="" >KA</option>
                <option value="" >TE</option>
            </select>
           </div>
           </nav> 
        </div>
    )
}

export default NavBar
