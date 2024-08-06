import { Input, Avatar, Badge } from 'antd'
import {
  SearchOutlined,
  MoonOutlined,
  SunOutlined,
  UserOutlined,
  BellOutlined,
  NotificationOutlined,
} from '@ant-design/icons'
import { useThemeContext } from '../../Context/ThemeContext/ThemeContext'

const Navigationbar = () => {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <div className={'flex items-center justify-between p-4 mr-[20px] '}>
      <div className="flex-grow max-w-lg mx-auto ">
        <Input
          placeholder="Search for modules, sub-modules, settings, etc"
          className="rounded-full bg-var(--bg-color) p-2 text-color"
          prefix={<SearchOutlined />}
        />
      </div>
      <div className="flex items-center gap-5">
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full bg-${
            theme === 'dark' ? 'gray-600' : 'gray-200'
          } hover:bg-${theme === 'dark' ? 'gray-700' : 'gray-300'}`}
        >
          {theme === 'dark' ? (
            <SunOutlined style={{ color: `var(--icon-color)` }} />
          ) : (
            <MoonOutlined style={{ color: `var(--icon-color)` }} />
          )}
        </button>
        <Avatar
          icon={<UserOutlined style={{ color: `var(--icon-color)` }} />}
        />
        <Badge count={1}>
          <BellOutlined style={{ color: `var(--icon-color)` }} />
        </Badge>
        <Badge count={2}>
          <NotificationOutlined style={{ color: `var(--icon-color)` }} />
        </Badge>
      </div>
    </div>
  )
}

export default Navigationbar
