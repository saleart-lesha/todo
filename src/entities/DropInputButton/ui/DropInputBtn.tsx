interface DropInputBtnProps {
  isDropInput: boolean
  handlerDropInput: () => void
}

const DropInputBtn = ({ isDropInput, handlerDropInput }: DropInputBtnProps) => {
    
  return (
    <div className='flex justify-center m-2'>
      <button
        onClick={() => handlerDropInput()}
        className={
          isDropInput
            ? 'rounded-full bg-red-200 hover:bg-red-300 inline-flex items-center w-10 h-10'
            : 'rounded-full bg-green-200 hover:bg-green-300 inline-flex items-center w-10 h-10'
        }
      >
        <img
          className='w-10 h-10'
          src={
            isDropInput
              ? 'https://cdn.icon-icons.com/icons2/1157/PNG/512/1487086345-cross_81577.png'
              : 'https://cdn.icon-icons.com/icons2/3138/PNG/512/plus_new_create_more_icon_192478.png'
          }
          alt='Plus icon'
        />
      </button>
    </div>
  )
}

export default DropInputBtn
