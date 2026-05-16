const projects = [
  { id: 1, title: 'Project Alpha', desc: 'A full-stack web application', tech: 'React, Node.js', link: '#' },
  { id: 2, title: 'Project Beta', desc: 'Mobile-first responsive design', tech: 'HTML, CSS, JS', link: '#' },
  { id: 3, title: 'Project Gamma', desc: 'REST API with Node.js', tech: 'Express, MongoDB', link: '#' },
  { id: 4, title: 'Project Delta', desc: 'Data visualization dashboard', tech: 'Python, D3.js', link: '#' },
];

const Projects = () => (
  <section id="projects" style={{ background: '#16213e', padding: '4rem 2rem', color: '#fff' }}>
    <h2 style={{ textAlign: 'center', color: '#e94560', fontSize: '2.5rem', marginBottom: '0.5rem' }}>Projects</h2>
    <p style={{ textAlign: 'center', color: '#a8a8b3', marginBottom: '2rem' }}>Some things I've built</p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
      {projects.map(p => (
        <div key={p.id} style={{ background: '#1a1a2e', borderRadius: '8px', padding: '1.5rem', border: '1px solid #e94560' }}>
          <h3 style={{ color: '#e94560', marginBottom: '0.5rem' }}>{p.title}</h3>
          <p style={{ color: '#a8a8b3', marginBottom: '0.5rem' }}>{p.desc}</p>
          <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '1rem' }}>{p.tech}</p>
          <a href={p.link} style={{ color: '#e94560' }}>View Project →</a>
        </div>
      ))}
    </div>
  </section>
);
export default Projects;
