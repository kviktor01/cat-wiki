import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer">
        <Link  to="/" className="logo">Catwiki</Link>
        <span>created by <a href="https://devchallenges.io/portfolio/kviktor01">kviktor01 </a>-devchallenge.io 2023</span>
    </div>
  )
}
