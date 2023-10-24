import { Link } from 'react-router-dom';

const userId = 10;

export const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Application</h1>
      <Link to={`/users/${userId}`}>Users</Link>
    </div>
  );
};
