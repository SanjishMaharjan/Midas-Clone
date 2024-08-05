import React, { useEffect } from 'react'
// import ReusableTable from '../../components/ReusableTable/ReusableTable'
import { PatientListcolumns } from '../../utils/patientAdminstrationutils/tablecolumns/patientListTable'
import { patientDummyData } from '../../utils/patientAdminstrationutils/patientDummyData'
import { fetchBankDetails } from '../../axios/fetchdata'
import { PatientListTopTab } from '../../components/PatientListTopTab'
import Table from 'antd/es/table'

const PatientList: React.FC = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchBankDetails()
        console.log(response)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    getData()
  }, [])

  return (
    <>
      <h1 className="text-2xl font-bold m-5 text-center">
        Patient Information
      </h1>
      <div className="p-4 m-4 border-2 rounded-lg bg-white">
        <PatientListTopTab />
        <Table
          columns={PatientListcolumns}
          dataSource={patientDummyData}
          pagination={{
            total: 50,
            pageSize: 10,
            current: 1,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} items`,
            pageSizeOptions: ['10', '20', '30', '40'],
            position: ['bottomCenter'],
            className: 'custom-pagination',
            style: { marginTop: '20px' },
            itemRender: (_, type, originalElement) => {
              if (type === 'prev') {
                return <a>Previous</a>
              }
              if (type === 'next') {
                return <a>Next</a>
              }
              return originalElement
            },
            onChange: (page, pageSize) => {
              console.log(`Page: ${page}, PageSize: ${pageSize}`)
              // Here you would typically fetch new data or update your state
            },
          }}
        />
      </div>
    </>
  )
}

export default PatientList
