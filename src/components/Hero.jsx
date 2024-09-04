import React from "react";
import { motion } from "framer-motion";
import { CustonButton } from './'


const Hero = () => {
    return (
        <div className="bg-transparent" id='home'>
            <div className="container mx-auto flex flex-col pb-10 md:pb-40 items-center justify-center h-screen px-6">
                <motion.h1
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: .8, delay: .2}}
                className="text-4xl md:text-4xl lg:text-6xl font-bold text-white mb-6 mt-24 text-center"
                >
                    Welcome to Matrix App
                </motion.h1>
                <motion.p
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: .8, delay: .4}}
                className="tex-lg md:text-xl lg:text-2xl text-white mb-10 text-center"
                >
                    Experience the power of the Matrix
                </motion.p>
                <CustonButton text="Get started" link="features" />
            </div>
        </div>
    )
}

export default Hero;