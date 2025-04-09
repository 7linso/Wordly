import '../css/Navbar.css'
import OverlayCard from './OverlayCard'

import { useState, useEffect } from 'react'

export default function Navbar() {
    const [showCard, setShowCard] = useState(false)
    const [theme, setTheme] = useState('light')

    const displayRules = () => {
        setShowCard(prev => !prev)
    }

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
        localStorage.setItem('theme', newTheme) 
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light'
        setTheme(savedTheme)
        document.documentElement.setAttribute('data-theme', savedTheme)
    }, [])

    return (
        <>
            <nav className='navbar'>
                <ul className='nav-list'>
                    <li onClick={displayRules}>Rules</li>
                    <li>🌙
                        <label className="theme-toggle">
                            <input
                                type="checkbox"
                                checked={theme === 'dark'}
                                onChange={toggleTheme}
                            />
                            <span className="slider"></span>
                        </label>
                        🌑
                    </li>
                    <li>Contact</li>
                </ul>
            </nav>

            {showCard && <OverlayCard />}
        </>
    )
}
