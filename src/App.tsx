import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { UsersPage } from './pages/UsersPage';
import { UserPage } from './pages/UserPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { NavBar } from './components/NavBar';

export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/about'
            element={<AboutPage />}
          />
          <Route
            path='/users'
            element={<UsersPage />}
          />
          <Route
            path='/usuarios'
            element={<Navigate to='/users' />}
          />
          <Route
            path='/users/:id'
            element={<UserPage />}
          />
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
