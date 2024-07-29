import React, { useState } from 'react'

export default function Header({theme}) {
const [isDark,setIsDark] = theme


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
      &nbsp;&nbsp;Dark Mode
    </p>
  </div>
</header>

    
      </>

  )
}
