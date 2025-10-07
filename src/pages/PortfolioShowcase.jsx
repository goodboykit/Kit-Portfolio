import './PortfolioShowcase.css'

const PortfolioShowcase = () => {
  return (
    <div className="portfolio-showcase">
      {/* Hero Section */}
      <section className="showcase-hero">
        <div className="showcase-container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="badge-icon">✦</span>
                <span>Portfolio Showcase</span>
              </div>
              <h1 className="hero-title">
                Creative
                <br />
                Portfolio
              </h1>
              <p className="hero-subtitle">Professional Work</p>
            </div>

            <div className="hero-image-wrapper">
              <div className="hero-image-placeholder">
                <div className="image-overlay">
                  <div className="play-button">
                    <span>▶</span>
                  </div>
                </div>
              </div>
              <div className="circular-badge yellow-badge">
                <span>Featured</span>
              </div>
            </div>

            <div className="hero-card orange-card">
              <h3>Get Started</h3>
              <p>Explore my work and let's create something amazing together</p>
              <button className="card-arrow">→</button>
            </div>

            <div className="hero-small-card">
              <div className="small-card-image"></div>
              <p className="small-card-text">Latest Project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="showcase-marquee">
        <div className="marquee-content">
          <span className="marquee-item">Creative ✦</span>
          <span className="marquee-item">Innovative ✦</span>
          <span className="marquee-item">Professional ✦</span>
          <span className="marquee-item">Modern Design ✦</span>
        </div>
      </section>

      {/* About Section */}
      <section className="showcase-about">
        <div className="showcase-container">
          <div className="about-grid">
            <div className="about-badge">
              <span className="badge-dot">•</span>
              <span>Featured Project</span>
            </div>

            <div className="about-content">
              <h2 className="about-title">
                Bringing creativity
                <br />
                and innovation
              </h2>
              <p className="about-text">
                Every project is crafted with attention to detail,
                combining creativity with technical expertise to
                deliver exceptional results.
              </p>
              <button className="btn-showcase yellow-btn">
                View Projects →
              </button>
              <div className="about-meta">
                <span>2024</span>
                <span className="meta-divider">|</span>
                <span>Featured Work</span>
              </div>
            </div>

            <div className="about-image-wrapper">
              <div className="about-image-placeholder">
                <div className="circular-badge small-yellow">New</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="showcase-gallery">
        <div className="showcase-container">
          <div className="gallery-header">
            <span className="section-number">01</span>
            <p className="section-subtitle">Featured Works</p>
            <h2 className="gallery-title">Explore amazing projects</h2>
          </div>

          <div className="gallery-grid">
            <div className="gallery-item large">
              <div className="gallery-image-placeholder"></div>
              <div className="gallery-overlay">
                <p className="gallery-tag">Photography</p>
              </div>
            </div>

            <div className="gallery-item medium">
              <div className="gallery-image-placeholder"></div>
              <div className="gallery-overlay">
                <p className="gallery-tag">Design</p>
              </div>
            </div>

            <div className="gallery-item small">
              <div className="gallery-image-placeholder"></div>
              <div className="circular-badge orange-badge-small">
                <span>New</span>
              </div>
            </div>

            <div className="gallery-item medium-alt">
              <div className="gallery-image-placeholder"></div>
              <div className="gallery-overlay">
                <p className="gallery-tag">Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="showcase-categories">
        <div className="categories-bar">
          <div className="showcase-container">
            <div className="categories-list">
              <span className="category-item">Web Design ✦</span>
              <span className="category-item">Development ✦</span>
              <span className="category-item">Branding ✦</span>
              <span className="category-item">Photography ✦</span>
              <span className="category-item">UI/UX ✦</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="showcase-projects">
        <div className="showcase-container">
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image cyan-bg"></div>
              <div className="project-info">
                <span className="project-number">01</span>
                <span className="project-divider">/</span>
                <span className="project-name">Project Name</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image peach-bg"></div>
              <div className="project-info">
                <span className="project-number">02</span>
                <span className="project-divider">/</span>
                <span className="project-name">Project Name</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image coral-bg"></div>
              <div className="project-info">
                <span className="project-number">03</span>
                <span className="project-divider">/</span>
                <span className="project-name">Project Name</span>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <button className="btn-showcase outline-btn">
              Make Appointment →
            </button>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="showcase-product">
        <div className="showcase-container">
          <div className="product-header">
            <span className="section-badge">• Product Showcase</span>
          </div>

          <div className="product-grid">
            <div className="product-image left">
              <div className="product-placeholder"></div>
              <div className="product-label">
                <span className="label-number">03</span>
                <span className="label-divider">/</span>
                <span className="label-text">Featured Concept</span>
              </div>
            </div>

            <div className="product-content">
              <h2 className="product-title">
                Creating the
                <br />
                perfect experience
              </h2>
              <p className="product-description">
                Attention to detail and user-centered design approach
                ensures exceptional results that exceed expectations.
              </p>
              <button className="btn-showcase yellow-btn">
                View Project →
              </button>
            </div>

            <div className="product-image right">
              <div className="product-placeholder"></div>
              <div className="product-label">
                <span className="label-number">04</span>
                <span className="label-divider">/</span>
                <span className="label-text">Product Concept</span>
              </div>
            </div>
          </div>

          <div className="progress-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="showcase-cta">
        <div className="showcase-container">
          <div className="cta-grid">
            <div className="cta-content">
              <span className="quote-icon">"</span>
              <h2 className="cta-title">
                Creating with
                <br />
                <span className="cta-highlight">passion</span>
              </h2>
              <div className="cta-icon-wrapper">
                <div className="camera-icon">📷</div>
              </div>
            </div>

            <div className="cta-image">
              <div className="cta-image-placeholder">
                <div className="circular-badge yellow-badge-large">
                  <span className="play-icon">▶</span>
                </div>
              </div>
            </div>

            <div className="cta-info">
              <span className="cta-badge">• Contact Me</span>
              <h3 className="cta-info-title">
                Explore creative
                <br />
                work showcase
              </h3>
              <button className="btn-showcase outline-white-btn">
                Get in Touch →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tags Section */}
      <section className="showcase-tags">
        <div className="tags-bar">
          <div className="showcase-container">
            <div className="tags-list">
              <span className="tag-item">Design ✦</span>
              <span className="tag-item">Innovation ✦</span>
              <span className="tag-item">Development ✦</span>
              <span className="tag-item">Creative ✦</span>
              <span className="tag-item">Professional ✦</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info Section */}
      <section className="showcase-footer-info">
        <div className="showcase-container">
          <div className="footer-info-grid">
            <div className="footer-col">
              <h4 className="footer-col-title">✦ Studio</h4>
              <div className="footer-links">
                <a href="#" className="footer-link-btn">Contact</a>
                <a href="#" className="footer-link-btn">About</a>
                <a href="#" className="footer-link-btn">Services</a>
                <a href="#" className="footer-link-btn">Blog</a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">✦ Discover</h4>
              <div className="footer-links">
                <a href="#" className="footer-link-btn">Projects</a>
                <a href="#" className="footer-link-btn">Collaborations</a>
                <a href="#" className="footer-link-btn">Community</a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">✦ Contact</h4>
              <div className="footer-contact">
                <button className="contact-btn">(555) 123-4567</button>
                <button className="contact-btn">hello@portfolio.com →</button>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">✦ Newsletter</h4>
              <div className="footer-newsletter">
                <input
                  type="email"
                  placeholder="Your email"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Subscribe →</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioShowcase
