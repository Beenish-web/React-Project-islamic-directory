import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>

      <Link to={`/user/${user.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default UserCard;