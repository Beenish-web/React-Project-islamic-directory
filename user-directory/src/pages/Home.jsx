import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="overlay">
          <h1 className="main-title">
            Islamic Scholars Directory
          </h1>

          <p className="subtitle">
            Welcome to a digital space dedicated to exploring profiles of prominent Islamic scholars, their historical contributions, and inspiring wisdom curated from classical text.
          </p>

          {/* New Detailing Section Added */}
          <div className="features-grid">
            <div className="feature-item">
              <h3>Verified Bios</h3>
              <p>Explore authentic biographical structures and histories.</p>
            </div>
            <div className="feature-item">
              <h3>Spiritual Sayings</h3>
              <p>Read selected quotes full of wisdom and guidance.</p>
            </div>
            <div className="feature-item">
              <h3>Interactive UI</h3>
              <p>Seamlessly dynamic interface tailored for readers.</p>
            </div>
          </div>

          <div className="home-btn-group">
            <Link to="/scholars" className="explore-btn">
              Explore Scholars
            </Link>
            <Link to="/quotes" className="explore-btn secondary">
              Read Quotes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;