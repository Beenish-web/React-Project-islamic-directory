import { Link } from "react-router-dom";

function ScholarCard({ scholar }) {
  return (
    <div className="scholar-card">
      
      <h3 className="scholar-name">
        {scholar.name}
      </h3>

      <div className="scholar-details">
        <p>
          <strong>Email:</strong> {scholar.email}
        </p>

        <p>
          <strong>Institute:</strong> {scholar.company.name}
        </p>
      </div>

      <Link className="details-btn" to={`/scholars/${scholar.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default ScholarCard;