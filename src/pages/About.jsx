const About = () => (
    <section id="about" style={{ minHeight: '80vh', background: '#0f3460', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff', padding: '2rem' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#e94560', marginBottom: '1rem' }}>About Me</h2>
        <p style={{ maxWidth: '600px', textAlign: 'center', lineHeight: '1.8', color: '#a8a8b3', marginBottom: '2rem' }}>
            I am a software engineer passionate about building beautiful and functional web applications using modern technologies.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['React', 'Node.js', 'Python', 'Git', 'Docker'].map(skill => (
                <span key={skill} style={{ background: '#e94560', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>{skill}</span>
            ))}
        </div>
        <p style={{ marginTop: '2rem', color: '#a8a8b3', fontSize: '0.95rem' }}>
            Currently open to new opportunities 🚀
        </p>
    </section>
);
export default About;