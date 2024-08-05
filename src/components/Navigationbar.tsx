// import Hamburgermenu from '../assets/images/Hamburger.png'
import { Input, Avatar, Badge } from 'antd'
// import { Flex } from 'antd'

import {
  SearchOutlined,
  MoonOutlined,
  UserOutlined,
  BellOutlined,
  NotificationOutlined,
} from '@ant-design/icons'

const Navigationbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
      }}
    >
      {/* <div className="demo-logo">
        <img src={Hamburgermenu} alt="logo" width="30px" height="30px" />
      </div> */}
      <div className="w-full max-w-xl mr-20 align-center">
        <Input
          placeholder="Search for modules, sub-modules, settings, etc"
          style={{ borderRadius: 30, border: '1px solid #282561' }}
          prefix={<SearchOutlined />}
        />
      </div>
      <div className="flex flex-row items-center gap-5 cursor-pointer">
        <MoonOutlined style={{ fontSize: 15 }} />

        <Avatar
          style={{ fontSize: 15 }}
          icon={<UserOutlined style={{ fontSize: 15 }} />}
        />
        {/* <Collapse items={"Nabaraj Karki"} defaultActiveKey={['1']}/> */}

        <Badge count={1}>
          <BellOutlined style={{ fontSize: 15 }} />
        </Badge>
        <Badge count={2}>
          <NotificationOutlined style={{ fontSize: 15 }} />
        </Badge>
      </div>
    </div>
  )
}

export default Navigationbar
