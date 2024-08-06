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
import ShowModal from '../../pages/Dashboard/ShowModal'

const { Sider } = Layout

const NewSidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const handleMenuClick = (key: string) => {
    navigate(key)
  }

  const handleShowModal = () => {
    console.log('Shown')
    setShowModal(true)
  }

  const handleCloseModal = () => {
    console.log('Closed')
    setShowModal(false)
  }
  return (
    <div className="flex">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={`theme-${localStorage.getItem('Theme')}`}
        // className="bg-black"
        style={{ height: '100vh', backgroundColor: `var(--bg-color)` }} // Ensuring the background color is white
      >
        <div className="h-16 flex items-center justify-center bg-primary px-4">
          <SiWindows11
            size={20}
            color="var(--icon-color)"
            style={{
              marginTop: '-5px',
              cursor: 'pointer',
            }}
            onClick={handleShowModal}
          />
        </div>
        <ShowModal visible={showModal} onClose={handleCloseModal} />

        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          className="mt-4"
          style={{ backgroundColor: `var(--bg-color)` }} // Ensuring the menu background color is white
          onClick={({ key }) => handleMenuClick(key)}
        >
          <Menu.Item
            key="/"
            icon={<DashboardOutlined />}
            className="text-sm"
            style={{ color: `var(--menu-item-text-color)` }}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="/banks"
            icon={<DollarOutlined />}
            className="text-sm"
            style={{ color: `var(--menu-item-text-color)` }}
          >
            Billing
          </Menu.Item>
          <Menu.Item
            key="/adminlogin"
            icon={<AppstoreOutlined />}
            className="text-sm"
            style={{ color: `var(--menu-item-text-color)` }}
          >
            Patient Administration
          </Menu.Item>
          <Menu.Item
            key="/appointments"
            icon={<CalendarOutlined />}
            className="text-sm"
            style={{ color: `var(--menu-item-text-color)` }}
          >
            Appointments
          </Menu.Item>
          <Menu.Item
            key="/patientsetup"
            icon={<UserAddOutlined />}
            className="text-sm"
            style={{ color: `var(--menu-item-text-color)` }}
          >
            Patient Setup
          </Menu.Item>
          <Menu.Item
            key="/fraction-management"
            icon={<PieChartOutlined />}
            className="text-sm"
            style={{ color: `var(--menu-item-text-color)` }}
          >
            Fraction Management
          </Menu.Item>
          <Menu.Item
            key="/statistics"
            icon={<BarChartOutlined />}
            className="text-sm"
            style={{ color: `var(--menu-item-text-color)` }}
          >
            Statistics
          </Menu.Item>
        </Menu>
      </Sider>

      <Button
        type="text"
        icon={
          collapsed ? (
            <HiMiniArrowRightCircle size={25} color="var(--icon-color)" />
          ) : (
            <HiMiniArrowLeftCircle size={25} color="var(--icon-color)" />
          )
        }
        onClick={() => setCollapsed(!collapsed)}
        className="text-lg ml-2 mt-2"
      />
    </div>
  )
}

export default NewSidebar
