const Navbar = () => (
  <nav style={{ background: '#1a1a2e', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h1 style={{ color: '#e94560', margin: 0 }}>Dev Portfolio</h1>
    <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem', margin: 0 }}>
      <li><a href="#home" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</a></li>
      <li><a href="#about" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>About</a></li>
      <li><a href="#projects" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Projects</a></li>
      <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Contact</a></li>
    </ul>
  </nav>
);
export default Navbar;

