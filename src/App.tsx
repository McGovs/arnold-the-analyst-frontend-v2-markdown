// App.tsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import DemoPage from './pages/DemoPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import SlackInstallPage from './pages/SlackInstallPage';
import SupportPage from './pages/SupportPage';
import PageWrapper from './components/PageWrapper';
import Video from './pages/Video';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public landing page */}
        <Route path="/" element={<Homepage />} />

        {/* Demo page */}
        <Route path="/demo" element={<DemoPage />} />

        {/* About Arnold */}
        <Route
          path="/about"
          element={
            <PageWrapper>
              <AboutPage />
            </PageWrapper>
          }
        />

        {/* Privacy + Terms */}
        <Route
          path="/privacy-terms"
          element={
            <PageWrapper>
              <PrivacyPage />
            </PageWrapper>
          }
        />

        {/* Slack Install */}
        <Route
          path="/slack-install"
          element={
            <PageWrapper>
              <SlackInstallPage />
            </PageWrapper>
          }
        />

        {/* ⭐ NEW: Video Tour Page */}
        <Route
          path="/video-tour"
          element={
            <PageWrapper>
              <Video />
            </PageWrapper>
          }
        />

        {/* Support */}
        <Route
          path="/support"
          element={
            <PageWrapper>
              <SupportPage />
            </PageWrapper>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
