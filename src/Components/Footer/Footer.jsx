import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import '../Footer/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="Containers">
          <div className="context-b">
          <div className="footcon">
                <li><a href="/">PaperKit</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Licenses</a></li>
            </div>
            <div className="footword">
                <p>© 2023, made with <AiFillHeart className='heart'/> by Oola Code</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer