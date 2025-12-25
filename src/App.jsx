import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import AmazonCTA from './components/AmazonCTA'

import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="container" style={{ padding: '1.5rem var(--spacing-sm)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
      <img src="/logo.png" alt="FYSCO" style={{ height: '60px', objectFit: 'contain' }} />
    </Link>

    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Home</NavLink>
      <NavLink to="/products" className="nav-link">Products</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
      <NavLink to="/contact" className="nav-link">Contact</NavLink>
    </div>

    <AmazonCTA text="Buy Now" className="glass-panel" style={{ background: 'transparent' }} />
  </nav>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer style={{ textAlign: 'center', padding: 'var(--spacing-lg)', color: 'var(--color-text-muted)', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <img src="/logo.png" alt="FYSCO" style={{ height: '80px', opacity: 0.8 }} />
          <p>&copy; {new Date().getFullYear()} FYSCO. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
