import React, { useState } from 'react'
import {
  //   DoubleLeftOutlined,
  //   DoubleRightOutlined,
  DashboardOutlined,
  DollarOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  UserAddOutlined,
  PieChartOutlined,
  BarChartOutlined,
  FileTextOutlined,
} from '@ant-design/icons'
import { Layout, Menu, Button } from 'antd'
import { SiWindows11 } from 'react-icons/si'
import { HiMiniArrowLeftCircle, HiMiniArrowRightCircle } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

const { Sider } = Layout

const NewSidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()

  const handleMenuClick = (key: string) => {
    navigate(key)
  }

  return (
    <div className="flex">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="bg-white"
        style={{ height: '100vh', backgroundColor: 'white' }} // Ensuring the background color is white
      >
        <div className="h-16 flex items-center justify-center bg-gray-100 px-4">
          <SiWindows11
            size={20}
            color="#282561"
            style={{ marginTop: '-5px', cursor: 'pointer' }}
          />
        </div>

        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          className="mt-4"
          style={{ backgroundColor: 'white' }} // Ensuring the menu background color is white
          onClick={({ key }) => handleMenuClick(key)}
        >
          <Menu.Item key="/" icon={<DashboardOutlined />} className="text-lg">
            Dashboard
          </Menu.Item>
          <Menu.Item key="/banks" icon={<DollarOutlined />} className="text-lg">
            Billing
          </Menu.Item>
          <Menu.Item
            key="/patient-admin"
            icon={<AppstoreOutlined />}
            className="text-lg"
          >
            Patient Administration
          </Menu.Item>
          <Menu.Item
            key="/appointments"
            icon={<CalendarOutlined />}
            className="text-lg"
          >
            Appointments
          </Menu.Item>
          <Menu.Item
            key="/patient-setup"
            icon={<UserAddOutlined />}
            className="text-lg"
          >
            Patient Setup
          </Menu.Item>
          <Menu.Item
            key="/fraction-management"
            icon={<PieChartOutlined />}
            className="text-lg"
          >
            Fraction Management
          </Menu.Item>
          <Menu.Item
            key="/statistics"
            icon={<BarChartOutlined />}
            className="text-lg"
          >
            Statistics
          </Menu.Item>
        </Menu>
      </Sider>

      <Button
        type="text"
        icon={
          collapsed ? (
            <HiMiniArrowRightCircle size={25} />
          ) : (
            <HiMiniArrowLeftCircle size={25} />
          )
        }
        onClick={() => setCollapsed(!collapsed)}
        className="text-lg ml-2 mt-2"
      />
    </div>
  )
}

export default NewSidebar
