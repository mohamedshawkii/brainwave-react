function SeeAllButton({title,Icon,styles}) {
  return (
    <button style={styles} className='
    flex flex-row justify-center items-center 
    rounded-md
    text-[#473BF0]
    font-medium
    text-xl
    py-2 px-4 gap-2'>
        <p>{title}</p>
        <div>{Icon}</div>
    </button>

  )
}

export default SeeAllButton