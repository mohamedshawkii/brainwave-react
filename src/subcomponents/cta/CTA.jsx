import React from 'react'

function CTA({styles,}) {
  return (
    <button style={styles} className='
      bg-[#473BF0]
      hover:bg-transparent
      hover:text-[#161C2D]
      rounded-md
      text-white
      font-medium align-middle py-2 px-4'>
      <p className='md:hidden '>start</p>
      <p className='xtsm:max-md:hidden xtsm:max-md:leading-4 md:max-lg:text-start'>Get started a project</p>
    </button>
  )
}

export default CTA