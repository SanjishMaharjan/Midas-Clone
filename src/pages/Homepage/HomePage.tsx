import { Layout, Select } from 'antd'
import ContentsList from '../../components/ContentsListing/ContentsList'
import sampleData from '../../sampleData/samplecontent.json'
import NewSidebar from '../../components/Sidebar/Sidebar'

const { Header, Content } = Layout

const HomePage = () => {
  return (
    <Layout className="min-h-screen  bg-[var(--bg-color)]">
      <NewSidebar />
      <Layout className="min-h-screen p1 bg-[var(--bg-color)] pb-10">
        <Content className="p-6 mt-4 bg-[var(--bg-color)] rounded-3xl shadow-lg pb-4">
          <div className="flex flex-row justify-between items-center mb-5">
            <h1 className="text-center text-2xl font-bold text-[var(--text-color)]">
              Modules
            </h1>
            <Select
              defaultValue="All Modules"
              style={{ width: 120 }}
              options={[
                { value: 'All Modules', label: 'All Modules' },
                { value: 'specialty', label: 'Specialty' },
                { value: 'specific', label: 'Specific' },
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
  )
}

export default HomePage
