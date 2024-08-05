interface Props {
  title: string
  description: string
  imageUrl: string
}

const ContentsList: React.FC<Props> = (props) => {
  return (
    <>
      <div className="flex flex-row gap-5 items-center">
        <img src={props.imageUrl} alt="logo" className="w-16 h-16 rounded-xl" />
        <div className="flex flex-col ">
          <h1 className="text-center text-xl font-bold text-customPurple">
            {props.title}
          </h1>
          <h1 className="text-center text-sm  text-customGrey">
            {props.description}
          </h1>
        </div>
      </div>
    </>
  )
}

export default ContentsList
