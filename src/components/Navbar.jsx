const Navbar = () => (
    <nav style={{ background: '#1a1a2e', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <h1 style={{ color: '#e94560', margin: 0 }}>MyPortfolio</h1>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem', margin: 0 }}>
            <li><a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
            <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
            <li><a href="#projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</a></li>
            <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
        </ul>
    </nav>
);
export default Navbar;