import React, { useState } from 'react'
import './Navbar.css'

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState('ES')

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark-mode', !darkMode)
  }

  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'ES' ? 'EN' : 'ES')
  }

  return (
    <nav className='navbar'>
      <div className='logo'>
        <h2>MovieSearchPro</h2>
      </div>
      <div className='navbar-options'>
        <button onClick={toggleDarkMode}>
          {darkMode ? '🌞 Modo Claro' : '🌙 Modo Oscuro'}
        </button>
        <button onClick={toggleLanguage}>
          {language === 'ES' ? 'Cambiar a Inglés' : 'Switch to Spanish'}
        </button>
      </div>
    </nav>
  )
}
