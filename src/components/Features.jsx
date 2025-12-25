import React from 'react';

const FeatureCard = ({ title, desc, icon }) => (
    <div className="glass-panel" style={{ padding: '2rem', textAlign: 'left', transition: 'transform 0.3s' }}>
        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{icon}</div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{desc}</p>
    </div>
);

const Features = () => {
    return (
        <section id="features" className="container" style={{ padding: 'var(--spacing-lg) var(--spacing-sm)' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem'
            }}>
                <FeatureCard
                    icon="❄️"
                    title="24h Cold Retention"
                    desc="Advanced vacuum insulation keeps your drinks ice-cold for a full 24 hours, no matter the outside temperature."
                />
                <FeatureCard
                    icon="🔥"
                    title="12h Hot Retention"
                    desc="Morning coffee stays piping hot until the evening. Perfect for long commutes and adventures."
                />
                <FeatureCard
                    icon="🛡️"
                    title="18/8 Stainless Steel"
                    desc="Medical grade stainless steel that won't retain flavors or odors. Durable and rust-resistant."
                />
                <FeatureCard
                    icon="🚫"
                    title="Leak-Proof Design"
                    desc="Toss it in your bag with confidence. Our precision-engineered cap ensures zero spills."
                />
                <FeatureCard
                    icon="🔒"
                    title="Convenient Lockable Lid"
                    desc="Secure your drink with a simple mechanism. Prevents accidental openings while you're on the move."
                />
                <FeatureCard
                    icon="☕"
                    title="Versatile Beverage Use"
                    desc="Ideally suited for water, coffee, tea, or sports drinks. A perfect companion for any beverage choice."
                />
                <FeatureCard
                    icon="🪶"
                    title="Portable & Lightweight Design"
                    desc="Designed for effortless portability. Fits standard cup holders and won't weigh down your pack."
                />
                <FeatureCard
                    icon="🪝"
                    title="Built-in Lid Hook"
                    desc="Integrated carriage hook allows for easy attachment to backpacks or comfortable one-finger carrying."
                />
            </div>
        </section>
    );
};

export default Features;
