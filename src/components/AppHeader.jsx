import React, { useState } from 'react'
import {Squash as Hamburger} from "hamburger-react";
import {FiEdit, FiBookmark, FiBarChart2, FiArrowDownCircle} from 'react-icons/fi'

const Appheader = () => {
    const [navOpen, setNavOpen] = useState(false)

    return  (
        <>
        <div className="sidebar">
            <div 
              className="hamburger-menu__container"
              onClick={() => setNavOpen(!navOpen)}  
            >
              <Hamburger color="#fff" toggled = {navOpen} toggle={setNavOpen} />
            </div>
            <div>
              <nav className={navOpen ? "nav--open" : "nav"}>
                <nav className="nav__item">
                  <FiEdit className='nav__item-icon' />
                  <span className="nav__item-text">대시보드</span>
                </nav>
                <nav className="nav__item">
                  <FiBookmark className="nav__item-icon" />
                  <span className="nav__item-text">북마크</span>
                </nav>
                <nav className="nav__item"> 
                  <FiBarChart2 className="nav__item-icon" />
                  <span className="nav__item-text">데이터 히스토리</span>
                </nav>
                <nav className="nav__item">
                  <FiArrowDownCircle className="nav__item-icon" />
                  <span className="nav__item-text">데이터 다운로드</span>
                </nav>            
              </nav>
            </div>
          </div>
        </>
    )
}
export default Appheader