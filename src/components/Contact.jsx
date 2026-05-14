const Contact = () => (
  <section id="contact" style={{ background: '#0f3460', padding: '4rem 2rem', color: '#fff', textAlign: 'center' }}>
    <h2 style={{ color: '#e94560', fontSize: '2.5rem' }}>Contact Me</h2>
    <p style={{ color: '#a8a8b3', marginBottom: '2rem' }}>Feel free to reach out!</p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
      <a href="mailto:user@example.com" style={{ background: '#e94560', color: '#fff', padding: '0.8rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>Email Me</a>
      <a href="https://github.com" style={{ border: '2px solid #e94560', color: '#e94560', padding: '0.8rem 2rem', borderRadius: '4px', textDecoration: 'none' }}>GitHub</a>
    </div>
  </section>
);
export default Contact;

