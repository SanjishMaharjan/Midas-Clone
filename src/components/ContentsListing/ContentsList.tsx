interface Props {
  title: string
  description: string
  imageUrl: string
}

const ContentsList: React.FC<Props> = (props) => {
  return (
    <>
      <div className="flex flex-col gap-3 items-center p-4 bg-[var(--bg-color)] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer">
        <img src={props.imageUrl} alt="logo" className="w-16 h-16 rounded-xl" />
        <div className="text-center">
          <h1 className="text-xl font-bold text-[var(--text-color)]">
            {props.title}
          </h1>
          <p className="text-sm text-[var(--text-color)]">
            {props.description}
          </p>
        </div>
      </div>
    </>
  )
}

export default ContentsList
