import React from 'react';

const Products = () => {
    const [mainImage, setMainImage] = React.useState('/fyscoweb/product.png');

    return (
        <div className="container" style={{ padding: 'var(--spacing-lg) var(--spacing-sm)', minHeight: '60vh' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)', background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center' }}>Our Products</h1>
            <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>Explore our premium collection of products designed to elevate your lifestyle.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '800px', margin: '0 auto' }}>
                {/* Product 1 - FYSCOGO Thermos */}
                <div className="glass-panel" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                    <div style={{ maxWidth: '500px' }}>
                        <img src={mainImage} alt="FYSCOGO Thermos" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px', dropShadow: '0 20px 40px rgba(0,0,0,0.5)', transition: 'opacity 0.3s' }} />
                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', justifyContent: 'center' }}>
                            <img
                                src="/fyscoweb/product.png"
                                alt="Main view"
                                onClick={() => setMainImage('/fyscoweb/product.png')}
                                style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px', cursor: 'pointer', border: mainImage === '/fyscoweb/product.png' ? '2px solid var(--color-accent-primary)' : '1px solid rgba(255,255,255,0.2)' }}
                            />
                            {[1, 2, 3, 4, 5].map((num) => (
                                <img
                                    key={num}
                                    src={`/fyscoweb/product-detail-${num}.jpg`}
                                    alt={`Detail ${num}`}
                                    onClick={() => setMainImage(`/fyscoweb/product-detail-${num}.jpg`)}
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        objectFit: 'cover',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        border: mainImage === `/fyscoweb/product-detail-${num}.jpg` ? '2px solid var(--color-accent-primary)' : '1px solid rgba(255,255,255,0.2)'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>FYSCOGO Insulated Bottle</h3>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            Uncompromised temperature retention. 24h Cold. 12h Hot. Guaranteed.
                            The new standard in hydration technology.
                        </p>
                        <a href="https://a.co/d/blcy3Bv" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>View Details</a>
                    </div>
                </div>

                {/* Product 2 - Placeholder */}
                <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Product 2</h3>
                    <p style={{ color: 'var(--color-text-muted)' }}>Coming Soon</p>
                </div>
            </div>
        </div>
    );
};

export default Products;
