import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubmitScanResult from '../screens/submit-scan-result/SubmitScanResult'
import SecurityScanResultList from '../screens/scan-result-list/SecurityScanResultList'
import SecurityScanFindingList from '../screens/scan-finding-list/SecurityScanFindingList';
import Home from '../screens/Home'
import NotFound from '../screens/NotFound';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submissions" element={<SubmitScanResult />} />
        <Route path="/results" element={<SecurityScanResultList />} />
        <Route path="/findings/:resultId" element={<SecurityScanFindingList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes;
