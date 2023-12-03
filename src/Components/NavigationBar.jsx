import React from 'react'
import { useSelector } from 'react-redux'
import '../css/navigationbar.css'
import { BsCart3 } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";


function NavigationBar() {
  const webInfo = useSelector((state => state.info.info))

  console.log(webInfo);
  return (
    <header className='container-fluid mainB '>
      <nav className='container mainBox'>
        <GiHamburgerMenu className='menuLogo' />
        <img src={webInfo[0].logoe} alt="imagenot found" className='carLogo' />
        <form class="d-flex searchBox" role="search">
          <input class="form-control  customSearch" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success customSearchBtn" type="submit">
            Search
          </button>
        </form>
        <div className='cartandheart'>
          <BsCart3 className='cartLogo' />
          <FaHeart className='heartLogo' />
        </div>
      </nav>
    </header>
  )
}

export default NavigationBar