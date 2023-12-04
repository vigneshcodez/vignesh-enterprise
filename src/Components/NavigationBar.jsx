import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import '../css/navigationbar.css'
import { BsCart3 } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Accordion from 'react-bootstrap/Accordion';
import { MdCancel } from "react-icons/md";
import { FaSearch } from "react-icons/fa";


function NavigationBar() {

  const webInfo = useSelector((state => state.info.info))

  const [menubar, setMenu] = useState(false)



  console.log(menubar);

  console.log(webInfo);
  return (
    <header className='container-fluid mainContainer '>

      <nav className='container wensiteViewNavBar'>

        <GiHamburgerMenu className='menuLogo' type='button' onClick={() => setMenu(!menubar)} />

        <img src={webInfo[0].logoe} alt="imagenot found" className='websiteLogo' />

        <FaSearch className='searchIcon' />

        <div className='searchBoxContainer'>
          <form class="d-flex searchBox" role="search">
            <input class="form-control  searchInputBox" type="search" placeholder="i'm shoping for..." aria-label="Search" />
            <div class="btn btn-outline-success searchButton" type="submit">
              <p className='searchText'>SEARCH</p>
              <FaSearch className='searchIconInsideNav' />
            </div>

          </form>
        </div>

        <div className='cartandheart'>
          <BsCart3 className='cartLogo' />
          <FaHeart className='heartLogo' />
        </div>

      </nav>

      {menubar &&
        <nav className='sideBar'>
          <img src={webInfo[0].logoe} alt="imagenot found" className='websiteLogo' type='button' onClick={() => setMenu(!menubar)} />
          <p className='sideBarItemsWithAccord'>
            <MdCancel className='menuLogo insidebar' type='button' onClick={() => setMenu(!menubar)} />

            <Accordion >
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  <Accordion >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Accordion Item #1</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Accordion Item #2</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>
          </p>
          <p className='sideBarItems'>PROMOTIONS</p>
          <p className='sideBarItems'>BRANDS</p>
          <p className='sideBarItems'>BUNDLES</p>
          <p className='sideBarItems'>CART</p>
          <p className='sideBarItems'>CHECKOUT</p>

        </nav>
      }
    </header>
  )
}

export default NavigationBar