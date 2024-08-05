import { Table } from 'antd'
import './ReusableTableStyles.css'

const { Column } = Table

interface DataType {
  key: React.Key
  [key: string]: any
}

interface ColumnType {
  title: string
  dataIndex: string
  key: string
  render?: (text: any, record: DataType) => React.ReactNode
}

interface ReusableTableProps {
  columns: ColumnType[]
  data: DataType[]
}

const ReusableTable: React.FC<ReusableTableProps> = ({ columns, data }) => {
  return (
    <Table dataSource={data} className="custom-table">
      {columns.map((col) => (
        <Column
          title={col.title}
          dataIndex={col.dataIndex}
          key={col.key}
          render={col.render}
        />
      ))}
    </Table>
  )
}

export default ReusableTable
