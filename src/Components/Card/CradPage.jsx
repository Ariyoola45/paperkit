import React from 'react'
import '../Card/card.css'
import file from '../../assets/img/faces/clem-onojeghuo-3.jpg'
import file2 from '../../assets/img/faces/erik-lucatero-2.jpg'
import file3 from '../../assets/img/faces/joe-gardner-2.jpg'
import {AiOutlineGooglePlus ,AiOutlineTwitter } from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

const CradPage = () => {
  return (
    <div className='card' data-aos="zoom-in">
     <div className="Containers">
    
     <div className="context">
     <h1>Let's talk about us</h1>
     <div className="grid-d">
      <div className="card-c">
      <img src={file} alt="" />
      <h2>henry ford</h2>
      <h4>project manager</h4>
      <p>Teamwork is so important that it is virtually impossible for you to reach 
        the heights of your capabilities or make the money that you want without  
        becoming very good at it.
        </p>
        <div className="icon">
        <AiOutlineGooglePlus className='iconn'/>
        <AiOutlineTwitter  className='iconn'/>
        <FaLinkedinIn className='iconn'/>
        </div>
      </div>
      <div className="card-c">
      <img src={file3} alt="" />
      <h2>henry ford</h2>
      <h4>project manager</h4>
      <p>A group becomes a team when each member is sure enough of himself and his contribution to
         praise the skill of the others. No one can whistle a symphony. It takes an orchestra to play it
        </p>
        <div className="icon">
        <AiOutlineGooglePlus className='iconn'/>
        <AiOutlineTwitter className='iconn' />
        <FaLinkedinIn className='iconn'/>
        </div>
      </div>
      <div className="card-c">
      <img src={file2} alt="" />
      <h2>henry ford</h2>
      <h4>project manager</h4>
      <p>Teamwork is so important that it is virtually impossible for you to reach 
        the heights of your capabilities or make the money that you want without  
        becoming very good at it.
        </p>
        <div className="icon">
        <AiOutlineGooglePlus className='iconn'/>
        <AiOutlineTwitter  className='iconn'/>
        <FaLinkedinIn className='iconn'/>
        </div>
      </div>
      
     </div>
     </div>
     </div>
    </div>
  )
}

export default CradPage