import React from 'react'

interface Props {
  title: string
  description: string
  imageUrl: string
}

const ModalContentsList: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col gap-1 items-center p-4 bg-[var(--bg-color)] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer ">
      <img
        src={props.imageUrl}
        alt="logo"
        className="w-12 h-12 rounded-xl cursor-pointer"
      />
      <div className="text-center">
        <h1 className="text-xl font-bold text-[var(--text-color)]">
          {props.title}
        </h1>
        <p className="text-sm text-[var(--text-color)]">{props.description}</p>
      </div>
    </div>
  )
}

export default ModalContentsList
