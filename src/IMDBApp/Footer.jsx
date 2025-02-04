import React from 'react'
import { Check, Chrome, ExternalLink, Facebook, Instagram, Twitter, Youtube } from 'react-feather'

const Footer = () => {
  return (
    <div className='bg-black'>
      <div className='text-center'>
        <button className='btn btn-warning mt-5 fw-bold ' style={{borderRadius:'30px'}}>Sign in for more access</button>
      </div>
      <div className='footer d-flex' style={{justifyContent:'space-around', height:'100%'}}>
      <div className='text-white mt-5 mb-5 pt-3 ms-5' style={{border:'1px solid grey', width:'500px', borderRadius:'10px'}}>
        <h3>Follow IMDB on social</h3>
        <a href="#" className='ms-4'><Instagram color='grey'/></a>
        <a href="#" className='ms-4'><Twitter color='grey'/></a>
        <a href="#" className='ms-4'><Youtube color='grey'/></a>
        <a href="#" className='ms-4'><Facebook color='grey'/></a>
        <a href="#" className='ms-4'><Chrome color='grey'/></a> 
      </div>

      <div className='col-6 mt-5 mb-5 me-5' style={{border:'1px solid grey', width:'500px', borderRadius:'10px'}}>
        <h3 className='text-white ms-3 mt-4'>Get the IMDB app</h3>
        <p className='ms-3 fw-medium' style={{color:'grey'}}>For Android and ios</p>
      </div>
      </div>

      <div className='d-flex justify-content-center fw-medium'>
        <a href="#" className='text-white m-3' style={{textDecoration:'none'}}><p>Help <ExternalLink color='white' size={18} /></p></a>
        <a href="#" className='text-white m-3' style={{textDecoration:'none'}}><p>Site Index <ExternalLink color='white' size={18} /></p></a>
        <a href="#" className='text-white m-3' style={{textDecoration:'none'}}><p>ImbdPro <ExternalLink color='white' size={18} /></p></a>
        <a href="#" className='text-white m-3' style={{textDecoration:'none'}}><p>Box Office Mojo <ExternalLink color='white' size={18} /></p></a>
        <a href="#" className='text-white m-3' style={{textDecoration:'none'}}><p>License IMDB Data <ExternalLink color='white' size={18} /></p></a>
      </div>

      <div className='d-flex justify-content-center fw-medium'>
        <a href="#" className='text-white m-3' style={{textDecoration:'none'}}><p>Press Room</p></a>
        <a href="#" className='text-white m-3' style={{textDecoration:'none'}}><p>Adversiting <ExternalLink color='white' size={15} /></p></a>
        <a href="#" className='text-white m-3' style={{textDecoration:'none'}}><p>Jobs <ExternalLink color='white' size={15} /></p></a>
        <a href="#" className='text-white m-3' style={{textDecoration:'none'}}><p>Condition of use</p></a>
        <a href="#" className='text-white m-3' style={{textDecoration:'none'}}><p>Privacy Policy</p></a>
        <a href="#" className='text-white m-3' style={{textDecoration:'none'}}><p><Check size={18} />Your Ads Privacy Choices</p></a>
      </div>

      <div className='text-center mt-4'>
        <h5 className='text-white'>an amazon company</h5>
        <p className='text-grey fw-bold '>© 1990-2024 by IMDB.com, Inc.</p>
      </div>
    </div>
  )
}

export default Footer
