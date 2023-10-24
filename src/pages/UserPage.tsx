import { useParams } from 'react-router-dom';

import { type UserParams } from '../params';

export const UserPage: React.FC = () => {
  const { id } = useParams<UserParams>();
  return (
    <div>
      <h1>User</h1>
      <span>{id}</span>
    </div>
  );
};
