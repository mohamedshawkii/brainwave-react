import React from 'react'
import {motion} from 'framer-motion'

function CTA({styles,}) {
  return (
    <motion.button style={styles} className='
      bg-[#473BF0]
      rounded-md
      text-white
      font-medium align-middle py-2 px-4'
      whileTap={{scale: 0.9}}
      whileHover={{scale: 1.1, backgroundColor: "transparent", color: "#83FFA3"}}
      transition={{bounceDamping: 10, bounceStiffness: 600}}
      >
      <p className='md:hidden '>start</p>
      <p className='xtsm:max-md:hidden xtsm:max-md:leading-4 md:max-lg:text-start'>Get started a project</p>
    </motion.button>
  )
}

export default CTA