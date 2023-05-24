import React from 'react'
import file4 from '../../assets/img/faces/joe-gardner-2.jpg'
import {AiFillSetting} from 'react-icons/ai'
import '../Prof/Pro.css'

const Prof = () => {
  return (
    <div className='prof'>
        <div className="Containers">
            <div className="con1">
                <img src={file4} alt="" />
             <div className="con2">
                <h4>Jane Faker</h4>
             <h3>MUSIC PRODUCER</h3>
              <p>An artist of considerable range, Jane Faker — the name taken by Melbourne-raised, Brooklyn-based 
                Nick Murphy — writes, 
                performs and records all of his own music, giving it a warm,
                 intimate feel with a solid groove structure</p>
                
             </div>
             <div className="bott">
             <button className='btn'> <AiFillSetting className='icons'/> Setting</button>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Prof