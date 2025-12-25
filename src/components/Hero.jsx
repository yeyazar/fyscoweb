import React from 'react';
import AmazonCTA from './AmazonCTA';

const Hero = () => {
    const [mainImage, setMainImage] = React.useState('/fyscoweb/product.png');

    return (
        <section className="container" style={{
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            padding: 'var(--spacing-xl) 0',
            position: 'relative'
        }}>

            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }}></div>

            <div style={{ position: 'relative', maxWidth: '600px', marginBottom: 'var(--spacing-md)' }}>
                <img
                    src={mainImage}
                    alt="FYSCOGO Insulated Bottle"
                    style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '16px', dropShadow: '0 20px 60px rgba(0,0,0,0.8)', transition: 'opacity 0.3s ease-in-out' }}
                />
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', justifyContent: 'center' }}>
                    {/* Add original image as option 0 */}
                    <img
                        src="/fyscoweb/product.png"
                        alt="Main view"
                        onClick={() => setMainImage('/fyscoweb/product.png')}
                        style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px', cursor: 'pointer', border: mainImage === '/fyscoweb/product.png' ? '2px solid var(--color-accent-primary)' : '1px solid rgba(255,255,255,0.2)', transition: 'transform 0.2s' }}
                    />
                    {[1, 2, 3, 4, 5].map((num) => (
                        <img
                            key={num}
                            src={`/fyscoweb/product-detail-${num}.jpg`}
                            alt={`Detail ${num}`}
                            onClick={() => setMainImage(`/fyscoweb/product-detail-${num}.jpg`)}
                            style={{
                                width: '50px',
                                height: '50px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                border: mainImage === `/fyscoweb/product-detail-${num}.jpg` ? '2px solid var(--color-accent-primary)' : '1px solid rgba(255,255,255,0.2)',
                                transition: 'transform 0.2s'
                            }}
                        />
                    ))}
                </div>
            </div>

            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1rem', lineHeight: '1' }}>
                <span style={{ display: 'block', fontSize: '0.4em', letterSpacing: '0.2em', opacity: 0.8, marginBottom: '0.5rem' }}>THE NEW STANDARD</span>
                <img src="/fyscoweb/logo.png" alt="FYSCOGO" style={{ height: '1.5em', marginTop: '0.2em', display: 'block', margin: '0 auto' }} />
            </h1>

            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: '600px', lineHeight: '1.6' }}>
                Uncompromised temperature retention. <br />
                <span style={{ color: 'var(--color-text-main)' }}>24h Cold. 12h Hot.</span> Guaranteed.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <AmazonCTA />
                <a href="#features" className="glass-panel" style={{
                    padding: '12px 32px',
                    borderRadius: '50px',
                    color: 'white',
                    fontWeight: '600',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    display: 'inline-block'
                }}>
                    Explore Features
                </a>
            </div>
        </section>
    );
};

export default Hero;
