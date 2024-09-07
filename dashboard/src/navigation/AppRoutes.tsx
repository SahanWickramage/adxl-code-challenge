import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubmitScanResult from '../screens/submit-scan-result/SubmitScanResult'
import SecurityScanResultList from '../screens/scan-result-list/SecurityScanResultList'
import Home from '../screens/Home'

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<SubmitScanResult />} />
        <Route path="/list" element={<SecurityScanResultList />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  )
}

export default AppRoutes;
