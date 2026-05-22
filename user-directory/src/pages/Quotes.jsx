import { useState, useEffect } from "react";

function QuotesPage() {
  const [copiedId, setCopiedId] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [language, setLanguage] = useState("en");

  // ── FAVORITES SYSTEM (Keeps your bookmarks saved) ──
  const [favorites, setFavorites] = useState(() => {
    const savedFavs = localStorage.getItem("islamic_quotes_favs");
    return savedFavs ? JSON.parse(savedFavs) : [];
  });

  useEffect(() => {
    localStorage.setItem("islamic_quotes_favs", JSON.stringify(favorites));
  }, [favorites]);

  const quotesData = [
    { 
      id: 1, 
      textEn: "“Indeed, with hardship comes ease.”", 
      textUr: "”بیشک مشکل کے ساتھ آسانی ہے۔“",
      sourceEn: "— Quran 94:6", 
      sourceUr: "— القرآن 94:6",
      tag: "Quran" 
    },
    { 
      id: 2, 
      textEn: "“Do not lose hope in the mercy of Allah.”", 
      textUr: "”اللہ کی رحمت سے مایوس نہ ہو۔“",
      sourceEn: "— Quran 39:53", 
      sourceUr: "— القرآن 39:53",
      tag: "Quran" 
    },
    { 
      id: 3, 
      textEn: "“Allah does not burden a soul beyond that it can bear.”", 
      textUr: "”اللہ کسی جان پر اس کی طاقت سے زیادہ بوجھ نہیں ڈالتا۔“",
      sourceEn: "— Quran 2:286", 
      sourceUr: "— القرآن 2:286",
      tag: "Quran" 
    },
    { 
      id: 4, 
      textEn: "“And He found you lost and guided you.”", 
      textUr: "”اور اس نے آپ کو راستہ بھولے ہوئے پایا تو ہدایت دی۔“",
      sourceEn: "— Quran 93:7", 
      sourceUr: "— القرآن 93:7",
      tag: "Quran" 
    },
    { 
      id: 5, 
      textEn: "“So remember Me; I will remember you.”", 
      textUr: "”پس تم مجھے یاد کرو، میں تمہیں یاد کروں گا۔“",
      sourceEn: "— Quran 2:152", 
      sourceUr: "— القرآن 2:152",
      tag: "Quran" 
    },
    { 
      id: 6, 
      textEn: "“The best among you are those who learn the Quran and teach it.”", 
      textUr: "”تم میں سے بہترین شخص وہ ہے جو قرآن سیکھے اور اسے سکھائے۔“",
      sourceEn: "— Prophet Muhammad ﷺ", 
      sourceUr: "— محمد رسول اللہ ﷺ",
      tag: "Hadith" 
    },
    { 
      id: 7, 
      textEn: "“Speak good or remain silent.”", 
      textUr: "”بھلی بات کہو ورنہ خاموش رہو۔“",
      sourceEn: "— Prophet Muhammad ﷺ", 
      sourceUr: "— محمد رسول اللہ ﷺ",
      tag: "Hadith" 
    },
    { 
      id: 8, 
      textEn: "“Verily, deeds are only judged by intentions.”", 
      textUr: "”بیشک اعمال کا دارومدار نیتوں پر ہے۔“",
      sourceEn: "— Prophet Muhammad ﷺ", 
      sourceUr: "— محمد رسول اللہ ﷺ",
      tag: "Hadith" 
    },
    { 
      id: 9, 
      textEn: "“Take account of yourselves before you are taken to account.”", 
      textUr: "”اپنا احتساب کرو اس سے پہلے کہ تمہارا احتساب کیا جائے۔“",
      sourceEn: "— Hazrat Umar (R.A)", 
      sourceUr: "— حضرت عمر فاروق (رض)",
      tag: "Saying" 
    },
    { 
      id: 10, 
      textEn: "“Be like a flower that gives its fragrance even to the hand that crushes it.”", 
      textUr: "”پھول کی طرح بنو جو اس ہاتھ کو भी خوشبو دیتا ہے جو اسے مسل دیتا ہے۔“",
      sourceEn: "— Hazrat Ali (R.A)", 
      sourceUr: "— حضرت علی ابن ابی طالب (رض)",
      tag: "Saying" 
    }
  ];

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const handleCopy = (text, source, id) => {
    const fullText = `${text} ${source}`;
    navigator.clipboard.writeText(fullText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredQuotes = activeFilter === "Favorites"
    ? quotesData.filter(quote => favorites.includes(quote.id))
    : activeFilter === "All" 
      ? quotesData 
      : quotesData.filter(quote => quote.tag === activeFilter);

  const categories = ["All", "Quran", "Hadith", "Saying", "Favorites"];

  return (
    <div className="quotes-page-container">
      
      {/* Language Buttons Only */}
      <div className="language-selector-zone">
        <button 
          className={`lang-btn ${language === "en" ? "active-lang" : ""}`} 
          onClick={() => setLanguage("en")}
        >
          🇬🇧 English
        </button>
        <button 
          className={`lang-btn ${language === "ur" ? "active-lang" : ""}`} 
          onClick={() => setLanguage("ur")}
        >
          🇵🇰 اردو
        </button>
      </div>

      <h1 className="page-title">
        {language === "en" ? "Islamic Quotes" : "اسلامی سنہری باتیں"}
      </h1>
      <p className="quotes-subtitle">
        {language === "en" 
          ? "Words of timeless guidance, wisdom, and peace." 
          : "ہدایت، حکمت اور امن کے ابدی الفاظ۔"}
      </p>

      {/* Filter Tabs */}
      <div className="filter-container">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-pill ${activeFilter === cat ? "active" : ""} ${cat === "Favorites" ? "fav-pill" : ""}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat === "All" && (language === "en" ? "All" : "سب")}
            {cat === "Quran" && (language === "en" ? "Quran" : "القرآن")}
            {cat === "Hadith" && (language === "en" ? "Hadith" : "الحدیث")}
            {cat === "Saying" && (language === "en" ? "Saying" : "اقوال")}
            {cat === "Favorites" && (language === "en" ? `❤️ Favorites (${favorites.length})` : `❤️ پسندیدہ (${favorites.length})`)}
          </button>
        ))}
      </div>

      {filteredQuotes.length === 0 && (
        <div style={{ textAlign: "center", padding: "40px", color: "#64748b" }}>
          <p style={{ fontSize: "1.2rem" }}>
            {language === "en" ? "No quotes found here yet." : "یہاں ابھی کوئی باتیں موجود نہیں ہیں۔"}
          </p>
        </div>
      )}

      {/* Quotes Grid */}
      <div className="quotes-grid">
        {filteredQuotes.map((quote) => {
          const isFav = favorites.includes(quote.id);
          return (
            <div 
              key={quote.id} 
              className={`premium-quote-card ${quote.tag.toLowerCase()}-border ${language === "ur" ? "rtl-layout" : ""}`}
            >
              <div className="quote-mark-bg">“</div>
              
              <div className="quote-card-header">
                <span className={`quote-tag ${quote.tag.toLowerCase()}-tag`}>
                  {quote.tag === "Quran" && (language === "en" ? "Quran" : "قرآن")}
                  {quote.tag === "Hadith" && (language === "en" ? "Hadith" : "حدیث")}
                  {quote.tag === "Saying" && (language === "en" ? "Saying" : "قول")}
                </span>
                
                <button 
                  className={`bookmark-btn ${isFav ? "is-fav" : ""}`}
                  onClick={() => toggleFavorite(quote.id)}
                >
                  {isFav ? "❤️" : "🤍"}
                </button>
              </div>

              <p className="quote-text">
                {language === "en" ? quote.textEn : quote.textUr}
              </p>
              <span className="quote-source">
                {language === "en" ? quote.sourceEn : quote.sourceUr}
              </span>

              <button 
                className="copy-btn" 
                onClick={() => handleCopy(
                  language === "en" ? quote.textEn : quote.textUr, 
                  language === "en" ? quote.sourceEn : quote.sourceUr, 
                  quote.id
                )}
              >
                {copiedId === quote.id 
                  ? (language === "en" ? "✓ Copied!" : "✓ کاپی ہو گیا!") 
                  : (language === "en" ? "📋 Copy Quote" : "📋 کاپی کریں")}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuotesPage;