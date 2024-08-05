import { useQuery } from '@tanstack/react-query'
import {
  // fetchData,
  fetchCatData,
  fetchCatImageData,
} from '../../components/Axios_get'
import { Typography, Divider, Card } from 'antd'

const { Paragraph } = Typography

const Details = () => {
  // Fetching cat details
  const { data: catData, error: catError, isLoading: catLoading } = useQuery({
    queryKey: ['details'],
    queryFn: fetchCatData,
  })

  // Fetching cat image
  const {
    data: catImgData,
    error: catImgError,
    isLoading: catImgLoading,
  } = useQuery({
    queryKey: ['catImg'],
    queryFn: fetchCatImageData,
  })

  console.log(catData)
  console.log(catImgData.url)

  if (catLoading || catImgLoading) return <div>Loading cat details...</div>
  if (catError instanceof Error) return <div>Error: {catError.message}</div>
  if (catImgError instanceof Error)
    return <div>Error: {catImgError.message}</div>

  return (
    <div className="m-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl m-10">Details</h1>
      <Card
        title="Did You Know?"
        bordered={true}
        style={{ width: 500 }}
        hoverable
        cover={catImgData && <img alt="cat" src={catImgData?.url} />}
      >
        <Paragraph className="text-center text-2xl font-bold">
          Interesting Facts about Cats
        </Paragraph>
        <Divider />
        <Paragraph copyable={catData?.fact}>{catData?.fact}</Paragraph>
      </Card>
      <Divider />
      {/* Uncomment the line below to display the JSON */}
      {/* <pre>{JSON.stringify(catData, null, 2)}</pre> */}
    </div>
  )
}

export default Details
