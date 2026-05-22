import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ScholarCard from "../components/ScholarCard";
import ErrorMessage from "../components/ErrorMessage";

function ScholarsPage() {
  const { id } = useParams();
  const [scholars, setScholars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const staticIslamicMeta = [
    { name: "Imam Abu Hanifa", email: "abuhanifa@classical-jurisprudence.edu", institute: "Kufa Academic Circle", field: "Fiqh", era: "80-150 AH", books: "Kitab al-Athar" },
    { name: "Imam Bukhari", email: "imbukhari@hadith-preservation.org", institute: "Hadith Seminary of Bukhara", field: "Hadith", era: "194-256 AH", books: "Sahih al-Bukhari" },
    { name: "Imam Muslim", email: "immuslim@hadith-preservation.org", institute: "Nishapur Hadith Council", field: "Hadith", era: "206-261 AH", books: "Sahih Muslim" },
    { name: "Imam Tirmidhi", email: "imtirmidhi@sunnah-archives.net", institute: "Tirmidh Center for Studies", field: "Hadith", era: "209-279 AH", books: "Jami' at-Tirmidhi" },
    { name: "Imam Ghazali", email: "alghazali@nizamiyya-scholastic.edu", institute: "Nizamiyya Academy of Baghdad", field: "Philosophy", era: "450-505 AH", books: "Ihya Uloom al-Din" },
    { name: "Ibn Taymiyyah", email: "ibntaymiyyah@theology-studies.org", institute: "Hanbali Council of Damascus", field: "Theology", era: "661-728 AH", books: "Majmu' al-Fatawa" },
    { name: "Imam Nawawi", email: "imnawawi@classical-schools.net", institute: "Dar al-Hadith Al-Ashrafiyya", field: "Fiqh", era: "631-676 AH", books: "Riyad as-Salihin" },
    { name: "Sheikh Abdul Qadir", email: "jilani@tazkiyah-spiritualism.edu", institute: "Qadiriyya Madrasa of Baghdad", field: "Spiritualism", era: "470-561 AH", books: "Al-Ghunya li-Talibi Tariq al-Haqq" },
    { name: "Ibn Kathir", email: "ibnkathir@exegesis-history.net", institute: "Great Umayyad Academy", field: "Theology", era: "701-774 AH", books: "Tafsir Ibn Kathir" },
    { name: "Imam Shafi", email: "imashafi@classical-jurisprudence.edu", institute: "Sacred Circles of Mecca", field: "Fiqh", era: "150-204 AH", books: "Al-Risala" }
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const updatedData = data.map((user, index) => ({
          ...user,
          ...staticIslamicMeta[index]
        }));
        setScholars(updatedData);
        setLoading(false);
      })
      .catch(() => { setError("Something went wrong"); setLoading(false); });
  }, []);

  // ── DETAIL VIEW LOGIC ──
  if (id) {
    const selectedScholar = scholars.find((s) => s.id === parseInt(id));
    
    if (loading) return <div className="loading">Loading...</div>;
    if (!selectedScholar) return <div>Scholar not found!</div>;

    return (
      <div className="scholars-container">
        <Link to="/scholars" className="back-btn">← Back to Directory</Link>
        
        <div className="detail-box">
          <div className="avatar-side">
            <div className="avatar-circle">{selectedScholar.name.charAt(0)}</div>
          </div>
          
          <div className="info-side">
            <h1>{selectedScholar.name}</h1>
            <p><strong>Era:</strong> {selectedScholar.era}</p>
            <p><strong>Field:</strong> {selectedScholar.field}</p>
            <p><strong>Institute:</strong> {selectedScholar.institute}</p>
            <p><strong>Books:</strong> {selectedScholar.books}</p>
            <p><strong>Email:</strong> {selectedScholar.email}</p>
          </div>
        </div>
      </div>
    );
  }

  // ── LIST VIEW LOGIC ──
  const filteredScholars = activeFilter === "All" 
    ? scholars 
    : scholars.filter(s => s.field === activeFilter);

  return (
    <div className="scholars-container">
      <h1 className="page-title">Islamic Scholars Directory</h1>
      
      <div className="filter-container">
        {["All", "Hadith", "Fiqh", "Theology", "Philosophy", "Spiritualism"].map((cat) => (
          <button 
            key={cat} 
            className={`filter-pill ${activeFilter === cat ? "active" : ""}`} 
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {!loading && (
        <div className="scholars-grid">
          {filteredScholars.map((scholar) => (
            <ScholarCard key={scholar.id} scholar={scholar} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ScholarsPage;