import React from 'react'
import { Table, Popover, Popconfirm, Space } from 'antd'
import { BsThreeDots } from 'react-icons/bs'
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
// import { BankDetails } from './ListBank'
import message from 'antd/lib/message'
import { BankDetails } from '../../../types/Banks/BankTypes'
import '../../../components/ReusableTable/ReusableTableStyles.css'

interface BankTableProps {
  data: BankDetails[]
  onView: (bank: BankDetails) => void
  onEdit: (bank: BankDetails) => void
  onArchive: (id: string) => void
}

const BankTable: React.FC<BankTableProps> = ({
  data,
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
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
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
    <Table
      className="custom-table"
      columns={columns}
      dataSource={data}
      rowKey="id"
    />
  )
}

export default BankTable
