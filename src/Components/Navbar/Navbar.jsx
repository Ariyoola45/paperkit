import React from 'react'
import { useState } from 'react'
import {AiFillFacebook ,AiOutlineTwitter,AiOutlineInstagram 
    ,AiFillGithub,AiOutlineMenu,AiOutlineClose} from'react-icons/ai'
import '../Navbar/Nav.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [Nav, setNav] = useState(false)
    const [Color, setColor] = useState(false)
    const [Color2, setColor2] = useState(false)

    const handle =()=> {
        setNav(!Nav)
    }

    const changeColor= () =>{
        if(window.scrollY >= 90){
            setColor(true)
        }else{
            setColor(false)
        }
    } 
    const changerColor2 = () =>{
        if(window.scrollY >=90){
            setColor2(true)
        }else{
            setColor2(false)
        }
    }
    window.addEventListener('scroll',changeColor)
    window.addEventListener('scroll',changerColor2)
     return (
    <div className={Color ? 'navbar navbar-bg' : 'navbar'}>
        <div className="Containers">
            <div className="content">
                <h1>PAPER KIT 2</h1>

                <ul className={Nav ? 'nav-menu active' : 'nav-menu'}>
                    <li ><Link  to="/">Home </Link></li>
                    <li ><Link  to="About">About</Link></li>
                    <li ><Link  to="/Contact">Contact</Link></li>
                    <li ><a  href="/">< AiFillFacebook/ >Facebook</a>  </li>
                
                    <li ><a  href="/"><  AiFillGithub/ > Github</a>  </li>
                
                </ul>
                <div onClick={handle} className={Color2 ? 'handlemenu handlemenu-bg' : 'handlemenu '}>
                    {!Nav ? <AiOutlineMenu/> :<AiOutlineClose/>}
                </div>
               
            </div>
        </div>

    </div>
  )
}

export default Navbar