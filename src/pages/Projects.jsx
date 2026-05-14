const projects = [
    { id: 1, title: 'Project Alpha', desc: 'A full-stack web application', link: '#' },
    { id: 2, title: 'Project Beta', desc: 'Mobile-first responsive design', link: '#' },
    { id: 3, title: 'Project Gamma', desc: 'REST API with Node.js', link: '#' },
];

const Projects = () => (
    <section id="projects" style={{ background: '#16213e', padding: '4rem 2rem', color: '#fff' }}>
        <h2 style={{ textAlign: 'center', color: '#e94560', fontSize: '2.5rem' }}>Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '2rem auto' }}>
            {projects.map(p => (
                <div key={p.id} style={{ background: '#1a1a2e', borderRadius: '8px', padding: '1.5rem', border: '1px solid #e94560' }}>
                    <h3 style={{ color: '#e94560' }}>{p.title}</h3>
                    <p style={{ color: '#a8a8b3' }}>{p.desc}</p>
                    <a href={p.link} style={{ color: '#e94560' }}>View →</a>
                </div>
            ))}
        </div>
    </section>
);
export default Projects;