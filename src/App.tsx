import Layout from '@/containers/Layout';
import AccountPage from '@/pages/AccountPage';
import AuthPage from '@/pages/AuthPage';
import PeoplePage from '@/pages/PeoplePage';
import SignInPage from '@/pages/SignInPage';
import SignUpPage from '@/pages/SignUpPage';
import RequireAuth from '@/shared/hoc/RequireAuth';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AuthPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route
          path="account"
          element={
            <RequireAuth>
              <AccountPage />
            </RequireAuth>
          }
        />
        <Route
          path="people"
          element={
            <RequireAuth>
              <PeoplePage />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
