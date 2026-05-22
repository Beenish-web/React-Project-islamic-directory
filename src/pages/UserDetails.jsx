import { Link, useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();

  const scholars = {
    1: {
      name: "Imam Abu Hanifa",
      field: "Fiqh",
      era: "80 AH - 150 AH",
      book: "Kitab al-Athar",
      institute: "Kufa Islamic Institute",
      email: "abuhanifa@classical-fiqh.edu",
      bio: "Founder of the Hanafi school of thought and one of the greatest jurists in Islamic history.",
    },

    2: {
      name: "Imam Bukhari",
      field: "Hadith",
      era: "194 AH - 256 AH",
      book: "Sahih al-Bukhari",
      institute: "Bukhari Hadith Academy",
      email: "imbukhari@hadith.org",
      bio: "Compiler of the most authentic Hadith collection in Sunni Islam.",
    },

    3: {
      name: "Imam Muslim",
      field: "Hadith",
      era: "206 AH - 261 AH",
      book: "Sahih Muslim",
      institute: "Muslim Hadith Center",
      email: "immuslim@hadith.org",
      bio: "One of the greatest Hadith scholars and student of Imam Bukhari.",
    },

    4: {
      name: "Imam Tirmidhi",
      field: "Hadith",
      era: "209 AH - 279 AH",
      book: "Jami at-Tirmidhi",
      institute: "Tirmidhi Research Institute",
      email: "imtirmidhi@sunnah.net",
      bio: "Famous Hadith scholar known for Jami at-Tirmidhi.",
    },

    5: {
      name: "Imam Al-Ghazali",
      field: "Theology",
      era: "450 AH - 505 AH",
      book: "Ihya Ulum al-Din",
      institute: "Nizamiyya University",
      email: "alghazali@theology.edu",
      bio: "Great theologian, philosopher, and spiritual reformer.",
    },

    6: {
      name: "Ibn Taymiyyah",
      field: "Theology",
      era: "661 AH - 728 AH",
      book: "Majmu al-Fatawa",
      institute: "Damascus Islamic Center",
      email: "ibntaymiyyah@theology.org",
      bio: "Renowned scholar known for his works in Aqeedah and Fiqh.",
    },
  };

  const scholar = scholars[id];

  // 🔴 404 NOT FOUND STATE (CLEAN)
  if (!scholar) {
    return (
      <div className="details-page-container">
        <div style={{ textAlign: "center", marginTop: "80px" }}>
          <h1>404 - Scholar Not Found</h1>
          <p>The scholar you are looking for does not exist.</p>

          <Link to="/scholars" className="back-link-btn">
            ← Go Back to Scholars
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* TOP NAVBAR */}
      <div className="global-header-bar">
        <div className="header-max-width">
          <Link to="/scholars" className="back-link-btn">
            ← Back to Scholars
          </Link>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="details-page-container">
        <div className="scholar-profile-card">

          {/* LEFT SIDE */}
          <div className="profile-header-zone">
            <div className="profile-avatar-shield">
              {scholar.name.charAt(0)}
            </div>

            <h2>{scholar.name}</h2>

            <div className="profile-tag-badge">
              {scholar.field}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="profile-content-grid">

            <div className="profile-info-block">
              <h3>Era</h3>
              <p>{scholar.era}</p>
            </div>

            <div className="profile-info-block">
              <h3>Institute</h3>
              <p>{scholar.institute}</p>
            </div>

            <div className="profile-info-block full-width-block">
              <h3>Famous Book</h3>
              <p className="highlight-book-text">{scholar.book}</p>
            </div>

            <div className="profile-info-block full-width-block">
              <h3>Biography</h3>
              <p className="biography-text-content">{scholar.bio}</p>
            </div>

            <div className="profile-info-block format-contact-block">
              <h3>Contact</h3>

              <div className="contact-sub-row">
                <p>
                  <strong>Email:</strong> {scholar.email}
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default UserDetails;