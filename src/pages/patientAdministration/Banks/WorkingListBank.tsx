import React, { useState, useEffect } from 'react'
import {
  fetchBankDetails,
  changeBankDetails,
  archiveBankDetails,
  addBankDetails, // Import the function to add bank details
} from '../../../axios/fetchdata'
import {
  Table,
  Modal,
  Popover,
  Popconfirm,
  Space,
  Form,
  Input,
  Button,
  Row,
  Col,
  message,
} from 'antd'
import { BsThreeDots } from 'react-icons/bs'
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  SaveOutlined,
} from '@ant-design/icons'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { TopTab } from '../../../components/ResuableTopTab/TopTab'
import '../../../components/ReusableTable/ReusableTableStyles.css'
import { formatTimestamp } from '../../../helper/dateConverter'
import AntBreadcrumb from '../../../components/Navigations/AntBreadcrumb'
import { HomeOutlined } from '@ant-design/icons'
// Define the type for bank details
export type BankDetails = {
  id: string
  name: string
  code: string
  created_by: string
  created_at: string
  updated_at: string
}

const EditModal = ({
  visible,
  onClose,
  bankDetails,
  onSave,
}: {
  visible: boolean
  onClose: () => void
  bankDetails: BankDetails | null
  onSave: (values: BankDetails) => void
}) => {
  const [form] = Form.useForm()

  useEffect(() => {
    if (bankDetails) {
      form.setFieldsValue(bankDetails)
    }
  }, [bankDetails, form])

  const handleFinish = async (values: Partial<BankDetails>) => {
    if (bankDetails) {
      await onSave({ ...bankDetails, ...values })
      onClose()
    }
  }

  return (
    <Modal title="Edit Details" open={visible} onCancel={onClose} footer={null}>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={handleFinish}
        autoComplete="off"
      >
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item label="Name" name="name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Code" name="code" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <div className="flex justify-end">
            <Button
              type="primary"
              htmlType="submit"
              style={{ background: '#319d73' }}
            >
              <SaveOutlined />
              Save
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  )
}

const ViewModal = ({
  visible,
  onClose,
  bankDetails,
}: {
  visible: boolean
  onClose: () => void
  bankDetails: BankDetails | null
}) => (
  <Modal title="Bank Details" open={visible} onCancel={onClose} footer={null}>
    {bankDetails && (
      <div className="p-4 m-4 border-2 rounded-lg bg-white">
        <p>
          <b>Name: </b>
          {bankDetails.name}
        </p>
        <p>
          <b>Code: </b>
          {bankDetails.code}
        </p>
        <p>
          <b>Created At: </b>
          {formatTimestamp(bankDetails.created_at)}
        </p>
        <p>
          <b>Updated At: </b>
          {formatTimestamp(bankDetails.updated_at)}
        </p>
      </div>
    )}
  </Modal>
)

const AddModal = ({
  visible,
  onClose,
  onSave,
}: {
  visible: boolean
  onClose: () => void
  onSave: (
    values: Omit<BankDetails, 'id' | 'created_by' | 'created_at'>,
  ) => void
}) => {
  const [form] = Form.useForm()

  const handleFinish = async (
    values: Omit<BankDetails, 'id' | 'created_by' | 'created_at'>,
  ) => {
    await onSave(values)
    onClose()
  }

  return (
    <Modal title="Add Bank" open={visible} onCancel={onClose} footer={null}>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={handleFinish}
        autoComplete="off"
      >
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item label="Name" name="name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Code" name="code" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <div className="flex justify-end">
            <Button
              type="primary"
              htmlType="submit"
              style={{ background: '#319d73' }}
            >
              <SaveOutlined />
              Save
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  )
}

const ListBank: React.FC = () => {
  const [viewModalVisible, setViewModalVisible] = useState(false)
  const [editModalVisible, setEditModalVisible] = useState(false)
  const [addModalVisible, setAddModalVisible] = useState(false)
  const [selectedBank, setSelectedBank] = useState<BankDetails | null>(null)
  const [bankDetails, setBankDetails] = useState<BankDetails[]>([])

  const getBankData = async () => {
    try {
      const response = await fetchBankDetails()
      console.log('Fetched Data:', response.data)
      setBankDetails(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleSaveBankDetails = async (updatedBank: BankDetails) => {
    try {
      await changeBankDetails(updatedBank.id, {
        name: updatedBank.name,
        code: updatedBank.code,
      })
      await getBankData()
      message.success('Bank Details Updated Successfully')
      console.log('Updated bank details:', updatedBank)
    } catch (error) {
      console.error('Error updating data:', error)
      message.error('Failed to update bank details')
    }
  }

  const handleAddBankDetails = async (
    newBank: Omit<BankDetails, 'id' | 'created_by' | 'created_at'>,
  ) => {
    try {
      await addBankDetails(newBank)
      await getBankData()
      message.success('Bank Added Successfully')
    } catch (error) {
      console.error('Error adding bank:', error)
      message.error('Failed to add bank')
    }
  }

  const handleArchiveBank = async (id: string) => {
    try {
      await archiveBankDetails(id)
      await getBankData()
      message.success('Bank Archived Successfully')
    } catch (error) {
      console.error('Error archiving data:', error)
      message.error('Failed to archive bank')
    }
  }

  useEffect(() => {
    getBankData()
  }, [])

  // Handle view, edit, and archive actions for each bank
  const handleViewClick = (bank: BankDetails) => {
    setSelectedBank(bank)
    setViewModalVisible(true)
  }

  const handleEditClick = (bank: BankDetails) => {
    setSelectedBank(bank)
    setEditModalVisible(true)
  }

  // Handle search and add actions for TopTab component
  const handleSearch = (value: string) => {
    console.log('Search:', value)
    // Implement search logic here
  }

  // Handle add action for TopTab component
  const handleAddClick = () => {
    console.log('Add bank')
    setAddModalVisible(true)
  }

  const handleCloseViewModal = () => setViewModalVisible(false)
  const handleCloseEditModal = () => setEditModalVisible(false)
  const handleCloseAddModal = () => setAddModalVisible(false)

  const popoverContent = (record: BankDetails) => (
    <div>
      <a onClick={() => handleViewClick(record)}>
        <EyeOutlined /> View
      </a>
      <br />
      <a onClick={() => handleEditClick(record)}>
        <EditOutlined /> Edit
      </a>
      <br />
      <Popconfirm
        title="Are you sure to archive this bank?"
        onConfirm={() => handleArchiveBank(record.id)}
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

  const BankListcolumns = [
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
  const items = [
    {
      title: <HomeOutlined />,
      href: '/',
    },
    {
      title: 'Banks',
      href: '/Banks',
    },
    // {
    //   title: 'Doctor Admin',
    //   href: '/doctorAdministration',
    // },
  ]

  return (
    <div>
      <AntBreadcrumb items={items} />
      <h1 className="text-2xl font-bold m-5 text-center">List of Banks</h1>
      <div className="p-4 m-4 border-2 rounded-lg bg-white">
        <TopTab
          searchPlaceholder="Search Banks"
          onSearch={handleSearch}
          onAddClick={handleAddClick}
          addButtonText="Add Bank"
          addButtonIcon={<IoMdAddCircleOutline />}
        />
        <Table
          className="custom-table"
          columns={BankListcolumns} // Column definitions
          dataSource={bankDetails} // Data source
          rowKey="id" // Unique key for each row
        />
        <ViewModal
          visible={viewModalVisible}
          onClose={handleCloseViewModal}
          bankDetails={selectedBank}
        />
        <EditModal
          visible={editModalVisible}
          onClose={handleCloseEditModal}
          bankDetails={selectedBank}
          onSave={handleSaveBankDetails}
        />
        <AddModal
          visible={addModalVisible}
          onClose={handleCloseAddModal}
          onSave={handleAddBankDetails}
        />
      </div>
    </div>
  )
}

export default ListBank
