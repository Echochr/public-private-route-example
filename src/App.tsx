import { Routes, Route, useLocation } from 'react-router-dom';

import AuthProvider from './AuthProvider';
import Layout from './Layout';
import PublicPage from './PublicPage';
import LoginPage from './LoginPage';
import RequireAuth from './RequireAuth';
import PrivatePage from './PrivatePage';

export default function App() {
  const location = useLocation();
  console.log(location);

  return (
    <AuthProvider>
      <h1>Public/Private Route Example</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quibusdam maiores.
        Pariatur, nemo ratione nulla illum aliquid expedita dicta, delectus doloremque perferendis,
        porro iste. Numquam totam nisi omnis repudiandae sequi? Omnis, dignissimos explicabo! Vitae
        eum explicabo nemo sunt laudantium quasi quisquam culpa natus recusandae, dignissimos
        repellat laboriosam fugit delectus error nostrum dolor labore sed deserunt non tenetur.
        Accusantium, est sit?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam dolor iste dignissimos quas
        placeat perferendis rem consequuntur sunt perspiciatis qui quae quisquam laborum obcaecati
        atque quibusdam repudiandae, optio, laboriosam consequatur. Dolorem, minima blanditiis
        voluptatum consequuntur, quis asperiores doloremque sit sint, commodi similique suscipit
        quisquam. A sapiente minus est omnis odio veniam! Modi corporis ullam sequi nesciunt
        architecto numquam aliquam odio!
      </p>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/private"
            element={
              <RequireAuth>
                <PrivatePage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
