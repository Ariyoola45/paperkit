import React from 'react'
import '../Contact/Contact.css'
import {BsPerson} from 'react-icons/bs'
import {TfiEmail} from 'react-icons/tfi'
const Contact = () => {
  return (
   <form action="/">
     <div className='contact' data-aos="fade-down-right">
        <div className="Containers">
          <div className="can">
            <h1>Keep in touch?</h1>
            <div className="flexs">
              <div className="pro">
              <label htmlFor="/">Name</label>
              <div className="pros">
              <BsPerson className='pro1'/>
                <input type="text" name='name' id='name' placeholder='Name' />
              </div>
              </div>
              <div className="pro2">
                <label htmlFor="/">Email</label>
               <div className="pros1">
               <TfiEmail className='pro3'/>
                <input type="text" name='name' id='name' placeholder='Email' />
               </div>
              </div>
            </div>
         
          </div>
          <div className="mss">
           <div className="mas2">
           <div className="tests">
              <label htmlFor="">Message</label>
            </div>
            <textarea name="" id="" cols="25" rows="10"placeholder='Tell us u thoughts and feelings'></textarea>
            <div className='btc'>
              <button >Send Massage</button>
            </div>
           </div>
          </div>
        </div>

    </div>
   </form>
  )
}

export default Contact