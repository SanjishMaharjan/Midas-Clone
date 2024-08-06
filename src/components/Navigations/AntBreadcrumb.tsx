import React from 'react'
import { ConfigProvider, Breadcrumb, theme } from 'antd'

interface BreadcrumbItem {
  href?: string
  title: React.ReactNode
}

interface AntBreadcrumbProps {
  items: BreadcrumbItem[]
}

const { useToken } = theme

const AntBreadcrumb: React.FC<AntBreadcrumbProps> = ({ items }) => {
  const { token } = useToken()

  const customToken = {
    ...token,
    Breadcrumb: {
      ...token.Breadcrumb,
      linkColor: 'var(--text-color)', // Custom color for breadcrumb items
      lastItemColor: '#282561', // Custom color for the last item
      linkHoverColor: '#0b8235', // Custom color for link hover state
      separatorColor: '#ffa500', // Custom color for separator
    },
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Breadcrumb: customToken.Breadcrumb,
        },
      }}
    >
      <Breadcrumb style={{ margin: '20px', color: `var(--text-color)` }}>
        {items.map((item, index) => (
          <Breadcrumb.Item
            key={index}
            href={item.href}
            className="text-[var(--text-color)]"
          >
            {item.title}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </ConfigProvider>
  )
}

export default AntBreadcrumb
