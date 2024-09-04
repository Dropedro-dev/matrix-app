import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const CustonButton = ({text, link}) => {
  return (
    <motion.button
    initial={{opacity: 0, scale: .8}}
    animate={{opacity: 1, scale: 1}}
    transition={{duration: .8, delay: .6}}
    className='bg-white bg-opacity-20 hover:bg-opacity-80 text-green-500 hover:text-green-600 font-semibold py-2 p-3 mx-6 rounded-full shadow-lg'
    >
        <Link
        to={link}
        smooth={true}
        duration={500}
        className='cursor-pointer'
        >
            {text}
        </Link>
    </motion.button>
  )
}

export default CustonButton
