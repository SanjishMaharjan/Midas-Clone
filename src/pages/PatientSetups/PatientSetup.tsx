import React from 'react'
import { Card, Layout, ConfigProvider, theme } from 'antd'
import Sidebar from '../../components/Sidebar/Sidebar'
import AntBreadcrumb from '../../components/Navigations/AntBreadcrumb'
import { HomeOutlined } from '@ant-design/icons'

const { Content } = Layout
const { useToken } = theme

type Props = {}

const PatientSetup: React.FC<Props> = () => {
  const { token } = useToken()

  const customizeToken = {
    Card: {
      headerBg: 'var(--bg-color)',
      headerColor: 'var(--text-color)',
      colorBgContainer: 'var(--card-bg)',
      colorText: 'var(--text-color)',
      colorBorderSecondary: 'var(--border-color)',
    },
  }

  const patients = [
    {
      name: 'John Doe',
      age: 45,
      diagnosis: 'Hypertension',
      treatment: 'Medication, Lifestyle changes',
      nextAppointment: '2024-08-10',
    },
    {
      name: 'Jane Smith',
      age: 30,
      diagnosis: 'Diabetes',
      treatment: 'Insulin therapy, Diet control',
      nextAppointment: '2024-08-15',
    },
    {
      name: 'Sam Wilson',
      age: 65,
      diagnosis: 'Chronic Obstructive Pulmonary Disease (COPD)',
      treatment: 'Bronchodilators, Pulmonary rehabilitation',
      nextAppointment: '2024-08-20',
    },
    {
      name: 'Emma Johnson',
      age: 50,
      diagnosis: 'Arthritis',
      treatment: 'Pain management, Physical therapy',
      nextAppointment: '2024-08-25',
    },
  ]
  const Breadcrumbitems = [
    {
      title: <HomeOutlined />,
      href: '/',
    },
    {
      title: 'Patient Administration',
      href: '/test',
    },
    {
      title: 'Appointments',
      href: '/appointments',
    },
  ]

  return (
    <ConfigProvider
      theme={{
        components: customizeToken,
      }}
    >
      <Layout className="min-h-screen bg-[var(--bg-color)]">
        <Sidebar />
        <Content className="flex-1 p-6 bg-[var(--bg-color)]">
          <AntBreadcrumb items={Breadcrumbitems} />
          <div className="flex flex-wrap gap-6 justify-start items-stretch">
            {patients.map((patient, index) => (
              <Card
                key={index}
                title={`${patient.name} (Age: ${patient.age})`}
                extra={<a href="#">More</a>}
                className="flex-grow basis-[calc(50%-12px)] min-w-[300px]"
              >
                <p>
                  <strong>Diagnosis:</strong> {patient.diagnosis}
                </p>
                <p>
                  <strong>Treatment:</strong> {patient.treatment}
                </p>
                <p>
                  <strong>Next Appointment:</strong> {patient.nextAppointment}
                </p>
              </Card>
            ))}
          </div>
        </Content>
      </Layout>
    </ConfigProvider>
  )
}

export default PatientSetup
