import './App.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import SubmitScanResult from './screens/SubmitScanResult'
import SecurityScanResultList from './screens/SecurityScanResultList'
import Home from './screens/Home'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/submit', element: <SubmitScanResult /> },
  { path: '/list', element: <SecurityScanResultList /> },
  { path: '*', element: <Navigate to="/" replace /> },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
