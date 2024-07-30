import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function Header() {
const [isDark,setIsDark] = useContext(ThemeContext)


  return (<>
      <header className={`header-container ${isDark?"dark":''}`}>
  <div className="header-content">
    <h2 className="title">
      <a href="/">Where in the world?</a>
    </h2>
    <p className="theme-changer" onClick={()=>{
      setIsDark(!isDark)
      localStorage.setItem('DarkMode',!isDark)
    }}>
      <i className={`fa-regular fa-${isDark?"sun":"moon"}`} />
      &nbsp;{`${isDark?"Light":"Dark"} Mode`}
    </p>
  </div>
</header>

    
      </>

  )
}
