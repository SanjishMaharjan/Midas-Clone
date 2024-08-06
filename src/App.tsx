import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginScreen from './pages/AuthPages/LoginScreen'
import HomePage from './pages/Homepage/HomePage'
import Results from './pages/TestPages/Results'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Details from './pages/TestPages/CatDetails'
import PageNotFound from './pages/ErrorMessagePages/PageNotFound'
import Sidebar from './components/Sidebar/Sidebar'
import MainLayout from './components/MainLayout'
import PatientList from './pages/patientAdministration/PatientList'
import FormPatientData from './components/FormPatientData'
import AdminLoginScreen from './pages/AuthPages/AdminLoginScreen'
import Test from './pages/TestPages/Test'
import ListBank from './pages/patientAdministration/Banks/WorkingListBank'
import ModularListBank from './pages/patientAdministration/Banks/ModularListBank'
import Appointments from './pages/Appointments/Appoinments'
import { ConfigProvider } from 'antd'
import Navigationbar from './components/NavigationBar/Navigationbar'
import { ThemeContextProvider } from './Context/ThemeContext/ThemeContext'
import PatientSetup from './pages/PatientSetups/PatientSetup'

function App() {
  return (
    <ThemeContextProvider>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'Roboto',
          },
        }}
      >
        <QueryClientProvider client={new QueryClient()}>
          <Router>
            <div className="min-h-screen">
              <Navigationbar />
              <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/adminlogin" element={<AdminLoginScreen />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/result" element={<Results />} />
                <Route path="/cat-details" element={<Details />} />
                <Route path="/sidebar" element={<Sidebar />} />
                <Route path="/mainlayout" element={<MainLayout />} />
                <Route path="/patientlist" element={<PatientList />} />
                <Route path="/test" element={<Test />} />
                <Route path="/oldbanks" element={<ListBank />} />
                <Route path="/banks" element={<ModularListBank />} />
                <Route path="/formpatientdata" element={<FormPatientData />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/patientsetup" element={<PatientSetup />} />

                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
          </Router>
        </QueryClientProvider>
      </ConfigProvider>
    </ThemeContextProvider>
  )
}

export default App
