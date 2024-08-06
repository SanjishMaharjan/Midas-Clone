import React from 'react'
import { Table, Popover, Popconfirm, Space, ConfigProvider } from 'antd'
import { BsThreeDots } from 'react-icons/bs'
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
// import { BankDetails } from './ListBank'
import message from 'antd/lib/message'
import { BankDetails } from '../../../types/Banks/BankTypes'
import '../../../components/ReusableTable/ReusableTableStyles.css'
import { OurPaginationProps } from '../../../types/Banks/BankTypes'

interface BankTableProps {
  data: BankDetails[]
  pagination: OurPaginationProps
  onView: (bank: BankDetails) => void
  onEdit: (bank: BankDetails) => void
  onArchive: (id: string) => void
  onPaginationChange: (page: number, pageSize?: number) => void
}

const customizeToken = {
  Table: {
    headerBg: 'var(--bg-color)',
    headerColor: 'var(--text-color)',
    rowHoverBg: '#var(--bg-color)',
    borderColor: '#d9d9d9',
  },
}

const BankTable: React.FC<BankTableProps> = ({
  data,
  pagination,
  onView,
  onEdit,
  onArchive,
}) => {
  const popoverContent = (record: BankDetails) => (
    <div>
      <a onClick={() => onView(record)}>
        <EyeOutlined /> View
      </a>
      <br />
      <a onClick={() => onEdit(record)}>
        <EditOutlined /> Edit
      </a>
      <br />
      <Popconfirm
        title="Are you sure to archive this bank?"
        onConfirm={() => onArchive(record.id)}
        onCancel={() => message.info('Archive action canceled')}
        okText="Yes"
        cancelText="No"
      >
        <a>
          <div style={{ color: 'red' }}>
            <DeleteOutlined /> Archive
          </div>
        </a>
      </Popconfirm>
    </div>
  )

  const columns = [
    {
      title: 'S.N',
      dataIndex: 'sn',
      key: 'sn',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Created By',
      dataIndex: 'created_by',
      key: 'created_by',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record: BankDetails) => (
        <Popover
          content={popoverContent(record)}
          trigger="click"
          overlayStyle={{ width: 120 }}
        >
          <a>
            <Space>
              <BsThreeDots size={20} style={{ cursor: 'pointer' }} />
            </Space>
          </a>
        </Popover>
      ),
    },
  ]

  return (
    <>
      {/* <h1>Current Page: {pagination.current_page}</h1>
      <h1>Page Size: {pagination.page_size}</h1>
      <h1>Total: {pagination.total}</h1> */}
      <ConfigProvider
        theme={{
          components: customizeToken,
        }}
      >
        <Table
          className="custom-table"
          columns={columns}
          dataSource={data}
          rowKey="id"
          style={{ backgroundColor: `var(--bg-color)` }}
          // pagination={{
          //   current: pagination.current_page,
          //   pageSize: pagination.page_size,
          //   total: pagination.total,
          // }}
          // pagination={pagination}
        />
      </ConfigProvider>
    </>
  )
}

export default BankTable
