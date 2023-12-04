import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import india from '../images/logos/india.jpg'
import '../css/header.css'
import { IoMdLogIn } from "react-icons/io";

function Header() {
  return (
    <header className='container-fluid  bg-success mm'>

      <div className="container mainContainer">

        {/* language container starts*/}

  
          <div className='container languageContainer'>
            <p className='text-white languageText'>Language</p>
            <Dropdown  >
              <Dropdown.Toggle variant="success" id="dropdown-basic" className='languageButton'>
                <img src={india} alt="" className='indiaFlag' />
                English
              </Dropdown.Toggle>

              <Dropdown.Menu >
                <Dropdown.Item href="#/action-1">
                  <img src={india} alt="" className='indiaFlag' />
                  English
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
      

        {/* language container ends*/}

        {/* cart and login */}


          <div className="cartAndLoginContainer">

            <p className='subOfCartAndLoginContainer'>cart</p>
            <p className='subOfCartAndLoginContainer'>checkout</p>
            <p className='subOfCartAndLoginContainer'><IoMdLogIn />Login/Register</p>


          </div>
    

      </div>
    </header>
  )
}

export default Header