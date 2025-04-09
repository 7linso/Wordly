import '../css/Navbar.css'
import OverlayCard from './OverlayCard'

import { useState } from 'react'

export default function Navbar() {
    const [showCard, setShowCard] = useState(false)
    const displayRules = () => {
        setShowCard(prev => !prev)
    }

    return <>
        <nav className='navbar'>
            <ul className='nav-list'>
                <li onClick={displayRules}>Rules</li>
                <li>Theme</li>
                <li>Contact</li>
            </ul>
        </nav>

        {showCard && <OverlayCard />}
    </>
}