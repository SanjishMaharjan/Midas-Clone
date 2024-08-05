import React, { useState } from 'react'
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Button, Layout, Menu } from 'antd'
// import Logo from '../assets/images/Hamburger.png'
import { SiWindows11 } from 'react-icons/si'

const { Sider, Header } = Layout

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ height: '100vh', backgroundColor: 'white' }} // Ensuring the background color is white
    >
      <div className="h-16 flex items-center justify-between bg-gray-100 px-4">
        {/* <img src={Logo} alt="logo" className="w-8 h-8 cursor-pointer" /> */}
        <Header className="p-0  bg-white flex items-center justify-center gap-2">
          <SiWindows11 size={25} color="#282561" />
          <Button
            type="text"
            icon={collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="text-sm w-16 h-16"
          />
        </Header>
      </div>

      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['1']}
        className="mt-4"
        style={{ backgroundColor: 'white' }} // Ensuring the menu background color is white
      >
        <Menu.Item key="1" icon={<HomeOutlined />} className="text-lg">
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />} className="text-lg">
          Profile
        </Menu.Item>
        <Menu.Item key="3" icon={<SettingOutlined />} className="text-lg">
          Settings
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar
