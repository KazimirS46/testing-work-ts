import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { TotalContacts } from './pages/TotalContacts';
import { Calendar } from './pages/Calendar';
import { Report } from './pages/Report';
import { LoginPage } from './pages/LoginPage';

const App: FC = () => {
  const auth: Boolean = true;
  return (
    <>
      {auth ? (
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<TotalContacts />} />
            <Route path='calendar' element={<Calendar />} />
            <Route path='report' element={<Report />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
        </Routes>
      )}
    </>
  );
};

export default App;
