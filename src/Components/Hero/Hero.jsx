import React from 'react'
import '../Hero/hero.css'
import {BsPlayFill} from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='hero  ' data-aos="fade-down">
        <div className='Cons ' data-aos="fade-down">
            <div className='page'>
                <h1>Example page</h1>
                <p>Start designing your landing page here.</p>

                <div className='bt'>
                    <button className='bsplay'>< BsPlayFill className='play'/>Watch video</button>
                    <button>Download</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero