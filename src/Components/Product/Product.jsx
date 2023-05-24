import React from 'react'
import '../Product/pro.css'
import {RiGalleryLine} from 'react-icons/ri'
import {TbBulb ,TbSunset2} from 'react-icons/tb'
import {BiBarChart} from 'react-icons/bi'


const Product = () => {
  return (
    <div className='product' >
        <div className='Containers'>
        <div className='Con' data-aos="fade-right">
            <h1 >Let's talk product</h1>
           <h2>This is the paragraph where you can write more details about your
             product. Keep you user engaged by providing meaningful information. 
             Remember that by this time, the user is curious, 
            otherwise he wouldn't scroll to get here. Add a button if you want the user to see more</h2> 
            <button className='btn'>SEE DETAILS</button>
        </div>

        </div>
        
        <div className="b-grid">
          <div className="card-a" data-aos="fade-left">
              <TbBulb className='icons'/>
              <h2>New Ideas</h2>
              <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient</p>
              <a href="/">SEE MORE</a>
          </div>
          <div className="card-a"  data-aos="fade-right">
              <BiBarChart className='icons'/>
              <h2>Statistics</h2>
              <p>Choose from a veriety of many colors resembling sugar paper pastel</p>
              <a href="/">SEE MORE</a>
          </div>
          <div className="card-a" data-aos="fade-up-right">
              <RiGalleryLine className='icons'/>
              <h2>Beautiful Gallery</h2>
              <p>Spend your time generating new ideas. You don't have to think of implementin</p>
              <a href="/">SEE MORE</a>
          </div>
          <div className="card-a">
              <TbSunset2 className='icons' data-aos="fade-up-left"/>
              <h2>Delightful design</h2>
              <p>Spend your time generating new ideas. You don't have to think of implementin</p>
              <a href="/">SEE MORE</a>
          </div>

        </div>
    </div>
  )
}

export default Product