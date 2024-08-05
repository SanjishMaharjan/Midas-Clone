import React from 'react'
import { Layout } from 'antd'
import Sidebar from './Sidebar'

const { Content } = Layout

const MainLayout: React.FC = () => {
  return (
    <Layout style={{ backgroundColor: '#fff' }}>
      <Sidebar />
      <Layout className="bg-gray-100">
        <Content className="m-6 p-6 bg-white rounded-md shadow-md">
          {/* {children} */}
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
