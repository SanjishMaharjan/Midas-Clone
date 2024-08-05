import React from 'react'
import type { FormProps } from 'antd'
import { Button, Checkbox, DatePicker, Form, Input, Select } from 'antd'

type FieldType = {
  SN?: string
  UHID?: string
  patientName?: string
  agegender?: string
  mobileNo?: string
  address?: string
  patientType?: string
  registerDate?: string
  department?: string
}

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values)
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

const FormPatientData: React.FC = () => (
  <Form
    name="patientData"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="SN"
      name="SN"
      rules={[{ required: true, message: 'Please input the serial number!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="UHID"
      name="UHID"
      rules={[{ required: true, message: 'Please input the UHID!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Patient Name"
      name="patientName"
      rules={[{ required: true, message: 'Please input the patient name!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Age/Gender"
      name="agegender"
      rules={[{ required: true, message: 'Please input the age and gender!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Mobile No"
      name="mobileNo"
      rules={[{ required: true, message: 'Please input the mobile number!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Address"
      name="address"
      rules={[{ required: true, message: 'Please input the address!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Patient Type"
      name="patientType"
      rules={[{ required: true, message: 'Please input the patient type!' }]}
    >
      <Select>
        <Select.Option value="Outpatient">Outpatient</Select.Option>
        <Select.Option value="Inpatient">Inpatient</Select.Option>
      </Select>
    </Form.Item>

    <Form.Item<FieldType>
      label="Register Date"
      name="registerDate"
      rules={[{ required: true, message: 'Please input the register date!' }]}
    >
      <DatePicker style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item<FieldType>
      label="Department"
      name="department"
      rules={[{ required: true, message: 'Please input the department!' }]}
    >
      <Select>
        <Select.Option value="Cardiology">Cardiology</Select.Option>
        <Select.Option value="Neurology">Neurology</Select.Option>
        <Select.Option value="Orthopedics">Orthopedics</Select.Option>
        {/* Add more departments as needed */}
      </Select>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
)

export default FormPatientData
