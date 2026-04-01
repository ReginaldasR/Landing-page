
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import BrandSelection from './pages/BrandSelection';
import CreatePost from './pages/CreatePost';
import BrandIdentity from './pages/BrandIdentity';
import Campaigns from './pages/Campaigns';
import ContentCalendar from './pages/ContentCalendar';
import Analytics from './pages/Analytics';
import Layout from './components/Layout';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/select-brand" element={<BrandSelection />} />
        <Route element={<Layout />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/identity" element={<BrandIdentity />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/calendar" element={<ContentCalendar />} />
          <Route path="/analytics" element={<Analytics />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;