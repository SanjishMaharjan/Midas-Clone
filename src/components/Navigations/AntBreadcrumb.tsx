import React from 'react'
import { Breadcrumb } from 'antd'
// import { HomeOutlined, UserOutlined } from '@ant-design/icons';

interface BreadcrumbItem {
  href?: string
  title: React.ReactNode
}

interface AntBreadcrumbProps {
  items: BreadcrumbItem[]
}

const AntBreadcrumb: React.FC<AntBreadcrumbProps> = ({ items }) => (
  <Breadcrumb style={{ margin: '20px' }}>
    {items.map((item, index) => (
      <Breadcrumb.Item key={index} href={item.href}>
        {item.title}
      </Breadcrumb.Item>
    ))}
  </Breadcrumb>
)

export default AntBreadcrumb
