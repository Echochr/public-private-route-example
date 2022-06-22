import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import useAuth from './useAuth';

interface LocationProps {
  state: {
    from: Location;
  };
}

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation() as unknown as LocationProps;
  const auth = useAuth();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const username = formData.get('username') as string;
    auth.signin(username, () => navigate(from, { replace: true }));
  };

  return (
    <div>
      <p>You must log in to view the page at {from}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
