import React from 'react';

const Contact = () => {
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate sending
        setSubmitted(true);
    };

    return (
        <div className="container" style={{ padding: 'var(--spacing-lg) var(--spacing-sm)', minHeight: '60vh' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)', background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center' }}>Contact Us</h1>
            <div className="glass-panel" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
                <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
                    Have questions? related to our products or services? Reach out to us!
                </p>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input type="text" placeholder="Your Name" required style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                    <input type="email" placeholder="Your Email" required style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                    <textarea placeholder="Message" rows="5" required style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', color: 'white' }}></textarea>

                    {!submitted ? (
                        <button className="btn-primary" style={{ marginTop: '1rem' }}>Send Message</button>
                    ) : (
                        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                            <p style={{ color: '#4BB543', fontWeight: 'bold' }}>Your message has been sent, thank you.</p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contact;
