'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion' 
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'

export default function Intro() {

    const { ref } = useSectionInView("Home", 0.5);

  return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        type: 'tween',
                        duration: 0.2
                    }}>
                    <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
                        alt='Emilio Montoya Photo'
                        width="192"
                        height="192"
                        quality="95"
                        priority={true}
                        className='h-24 w-24 rounded-full border-[0.35rem] border-neutral-700 shadow-xl'/>
                </motion.div>

                <motion.span className='absolute bottom-0 right-0 text-4xl'
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        type: 'spring',
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7
                    }}>
                    👌
                </motion.span>
            </div>
        </div>

        <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <span className="font-bold">Hi, I'm Emilio.</span> I'm a{" "}
            <span className="font-bold">Software engineer</span> with almost{" "}
            <span className="font-bold">2 years</span> of experience developing web applications and managing business CRM and ERP. 
            And I enjoy learning new <span className="italic">technologies</span> related to{" "}
            <span className="underline">Full-Stack Development</span>.
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
             initial={{ opacity: 0, y: 100 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{
                delay: 0.1
                }}>
            <Link href='#contact'
                className='group bg-neutral-200 text-neutral-800 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-neutral-300 active:scale-105 transition'>
                Contact me here <BsArrowRight className='group-hover:translate-x-1 transition'/>{" "}
            </Link>
            <a href='/CV-EN.pdf' download className='group bg-neutral-700 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-neutral-800 active:scale-105 transition cursor-pointer'>
                Download CV <HiDownload className='group-hover:translate-y-1 transition'/>{" "}
            </a>
            <a href='https://www.linkedin.com/in/emilio-montoya-08b55b240/' target='_blank' className='bg-neutral-700 p-4 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:bg-neutral-800 active:scale-105 transition cursor-pointer'>
                <BsLinkedin/>
            </a>
            <a href='https://github.com/EmilioMont21' target='_blank'  className='bg-neutral-700 p-4 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-110 hover:scale-110 hover:bg-neutral-800 active:scale-105 transition cursor-pointer'>
                <FaGithubSquare/>
            </a>
        </motion.div>

    </section>
  )
}
