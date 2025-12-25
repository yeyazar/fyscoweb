import React from 'react';

const About = () => {
    return (
        <div className="container" style={{ padding: 'var(--spacing-lg) var(--spacing-sm)', minHeight: '60vh' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)', background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center' }}>About FYSCO</h1>
            <div className="glass-panel" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
                    FYSCO is dedicated to bringing you the highest quality products with a focus on innovation and design.
                    We believe in creating experiences that resonate with our customers and enhance their daily lives.
                </p>
                <p style={{ lineHeight: '1.6' }}>
                    Our team works tirelessly to source the best materials and craft products that stand the test of time.
                    Thank you for being part of our journey.
                </p>
            </div>
        </div>
    );
};

export default About;
