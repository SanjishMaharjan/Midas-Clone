export interface PatientDataType {
    // key: React.Key
    // SN: string
    // firstName: string
    // lastName: string
    // age: number
    // address: string
    // tags: string[]

    key: React.Key
    SN: string
    UHID: string
    patientName: string
    // age: number
    agegender: string
    mobileNo: string
    address: string
    patientType: string
    registerDate: string
    department: string
  }
export const PatientListcolumns = [
    {
      title: 'S.N',
      dataIndex: 'SN',
      key: 'SN',
    },
    {
      title: 'UHID',
      dataIndex: 'UHID',
      key: 'UHID',
    },
    {
      title: 'Patient Name',
      dataIndex: 'patientName',
      key: 'patientName',
    },
    {
      title: 'Age/Gender',
      dataIndex: 'agegender',
      key: 'agegender',
    //   render: (text: string, record: PatientDataType) => `${record.age}/${record.gender}`,
    },
    {
      title: 'Mobile No',
      dataIndex: 'mobileNo',
      key: 'mobileNo',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Patient Type',
      dataIndex: 'patientType',
      key: 'patientType',
    },
    {
      title: 'Register Date',
      dataIndex: 'registerDate',
      key: 'registerDate',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'action',
      dataIndex: 'action',
      key: 'action',
    },
  ]