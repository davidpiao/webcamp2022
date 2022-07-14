import React, { useState } from "react"
import "./header.css"
import SearchBox from '../SearchBox';

const Header = () => {
  const [Mobile, setMobile] = useState(false)
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <img src='./images/logo.png' alt='' />
              <a href='/'>로고 here</a>
            </div>
            {/*<ul className='flexSB'>*/}
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <a href='/'>로그인</a>
              </li>
              <li>
                <a href='/'>회원가입</a>
              </li>
              <li>
                <a href='/'>영화</a>
              </li>
              <li>
                <a href='/'>드라마</a>
              </li>
              <li>
                <a href='/'>마이 페이지</a>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <div className='account flexSB'>
            {/* <i className='fa fa-search'></i>
            <i class='fas fa-bell'></i>
            <i className='fas fa-user'></i> */}
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            {/* <button>Subscribe Now</button> */}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
