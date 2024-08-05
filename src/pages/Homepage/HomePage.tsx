import { Layout, Select } from 'antd'
import Navigationbar from '../../components/Navigationbar'
import ContentsList from '../../components/ContentsList'
import sampleData from '../../sampleData/samplecontent.json'
import Sidebar from '../../components/Sidebar'
// import AntBreadcrumb from '../../components/Navigations/AntBreadcrumb'
// import { HomeOutlined } from '@ant-design/icons'

const { Header, Content } = Layout

const HomePage = () => {
  return (
    <Layout className="min-h-screen">
      <Header className="bg-white">
        <Navigationbar />
      </Header>
      <Layout>
        <Sidebar />

        <Layout className="p-10 bg-gray-100">
          {/* <AntBreadcrumb items={items} /> */}
          <Content>
            <div className="flex flex-row justify-between items-center mb-5">
              <h1 className="text-center text-2xl font-bold text-customPurple">
                Modules
              </h1>
              <Select
                defaultValue="All Modules"
                style={{ width: 120 }}
                options={[
                  { value: 'All Modules', label: 'All Modules' },
                  { value: 'specialty', label: 'specialty' },
                  { value: 'specfic', label: 'specfic' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {sampleData.map((item, index) => (
                <ContentsList
                  key={index}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                />
              ))}
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default HomePage
