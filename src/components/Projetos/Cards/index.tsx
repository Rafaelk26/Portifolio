"use client";

import { motion } from "motion/react";
import { RiArrowRightLongLine } from 'react-icons/ri';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CardsProps {
    nomeProjeto: string;
    descricaoProjeto: string;
    categoriaProjeto: "Sites" | "Sistemas" | "Aplicativos";
    srcProjeto: string | StaticImageData;
    linkProjeto: string;
}

export function Cards({ nomeProjeto, descricaoProjeto, categoriaProjeto, srcProjeto, linkProjeto }: CardsProps){
    return(
        <>
            <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y:0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
                duration: 0.8,
                ease: "easeOut",
            }}
            className='w-full p-4 border border-[#242424] bg-[#0C121D] rounded-xl from:translate-x-0 to:translate-x-full'>
                <Image 
                className='object-cover w-full h-56 rounded-xl'
                width={0}
                height={0}
                src={srcProjeto ? srcProjeto : ""}
                alt=''
                />

                <h4 className='w-fit bg-[#162D5B] mt-4 py-0.5 px-3 border border-[#1E3B74] rounded-md'>{categoriaProjeto}</h4>

                <h1 className='font-poppins font-bold text-2xl mt-4 mb-2'>{nomeProjeto}</h1>

                <span className='font-poppins font-light bold text-sm'>{descricaoProjeto}</span>

                <Link href={linkProjeto} target="_blank" className='w-max'>
                    <button className="mt-4 flex gap-3 text-[#52C538] transition-all
                    hover:text-white hover:cursor-pointer">
                        <span className="text-normal font-poppins font-light">Ver Projeto</span>
                        <RiArrowRightLongLine className="fill-current" size={24} />
                    </button>
                </Link>
            </motion.div>
        </>
    )
}