interface DropInputBtnProps {
  isDropInput: boolean
  handlerDropInput: () => void
}

const DropInputBtn = ({ isDropInput, handlerDropInput }: DropInputBtnProps) => {
  return (
    <div
      onClick={handlerDropInput}
      className='flex justify-center m-2 rounded-full hover:bg-stone-200'
    >
      <button className={'inline-flex items-center w-10 h-10'}>
        <img
          className='w-6 h-6'
          src={
            isDropInput
              ? 'https://cdn.icon-icons.com/icons2/2406/PNG/512/minus_subtract_icon_145958.png'
              : 'https://cdn.icon-icons.com/icons2/1372/PNG/512/add_90924.png'
          }
          alt='Plus icon'
        />
      </button>
    </div>
  )
}

export default DropInputBtn
