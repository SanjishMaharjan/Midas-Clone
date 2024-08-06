import React from 'react'
import NewSidebar from '../../components/Sidebar/Sidebar'
import { TopTab } from '../../components/ResuableTopTab/TopTab'
import AntBreadcrumb from '../../components/Navigations/AntBreadcrumb'
import { HomeOutlined } from '@ant-design/icons'
import { Layout } from 'antd'

const { Header } = Layout

const Appointments = () => {
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
    <Layout className="min-h-screen bg-[var(--bg-color)]">
      <NewSidebar />
      <Layout className="flex-1">
        <div className="p-6 bg-[var(--bg-color)] flex-grow">
          <AntBreadcrumb items={Breadcrumbitems} />
          <TopTab
            searchPlaceholder="Search Appointments"
            onSearch={(value) => console.log('Search appointments:', value)}
            addButtonText="Add Appointment"
            onAddClick={() => console.log('Add appointment clicked')}
          />
          <div className="p-4 bg-[var(--bg-color)] rounded-lg shadow-md mt-4">
            <h1 className="text-2xl font-bold text-center">Appointments</h1>
            {/* Add your appointments content here */}
          </div>
        </div>
      </Layout>
    </Layout>
  )
}

export default Appointments
