import React, { useEffect } from 'react'
import { Modal, Form, Input, Button, Row, Col } from 'antd'
import { SaveOutlined } from '@ant-design/icons'
// import { BankDetails } from './ListBank'
import { formatTimestamp } from '../../../helper/dateConverter'
import { BankDetails } from '../../../types/Banks/BankTypes'

interface ModalProps {
  visible: boolean
  onClose: () => void
  bankDetails?: BankDetails | null
  onSave?: (values: BankDetails) => void
  onAdd?: (
    values: Omit<BankDetails, 'id' | 'created_by' | 'created_at'>,
  ) => void
}

export const EditModal: React.FC<ModalProps> = ({
  visible,
  onClose,
  bankDetails,
  onSave,
}) => {
  const [form] = Form.useForm()

  useEffect(() => {
    if (bankDetails) {
      form.setFieldsValue(bankDetails)
    }
  }, [bankDetails, form])

  const handleFinish = async (values: Partial<BankDetails>) => {
    if (bankDetails && onSave) {
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

export const ViewModal: React.FC<ModalProps> = ({
  visible,
  onClose,
  bankDetails,
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

export const AddModal: React.FC<ModalProps> = ({ visible, onClose, onAdd }) => {
  const [form] = Form.useForm()

  const handleFinish = async (
    values: Omit<BankDetails, 'id' | 'created_by' | 'created_at'>,
  ) => {
    if (onAdd) {
      await onAdd(values)
      onClose()
    }
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
