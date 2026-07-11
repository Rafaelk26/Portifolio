"use client";

import Image from "next/image";
import { motion } from 'motion/react';
import { Button1 } from "../Button1";
import { Button2 } from "../Button2";
import { Lists } from "../Lists";

import DesignerArt from '../../../public/Desktops.png';

export function Inicio(){
    return(
        <>
            <main className="flex max-w-7xl w-full mx-auto flex-col pt-10
            md:flex-row md:pt-0" id="inicio">
                {/* Writes */}
                <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                    duration: 0.7,
                    ease: "easeOut",
                }} className="w-full flex flex-col gap-6 justify-center items-center md:items-start">
                    <h1 className="font-light font-poppins text-[#52C538]">DESENVOLVEDOR WEB & MOBILE</h1>
                    <span className="font-bold font-poppins text-white text-4xl text-center
                    md:text-5xl md:text-start">
                        Soluções digitais que
                        <h1 className="text-[#52C538]">
                            transformam negócios
                        </h1>
                    </span>

                    <span className="font-light font-poppins text-base text-center w-11/12
                    md:text-start md:w-full md:text-lg">Desenvolvimento de sites e aplicativos para o seu negócio de forma eficaz e robusta, totalmente personalizado de acordo com o seu negócio próprio.
                    </span>

                    <div className="w-full mt-4 md:mt-0">
                        <div className="flex justify-center w-full gap-3 
                        md:w-fit md:justify-start md:gap-6">
                            <Button2 />
                            <Button1 />
                        </div>

                        <div>

                        </div>
                    </div>

                    <div className="w-full grid grid-cols-2 justify-items-center-safe gap-6 
                    md:grid-cols-4 md:gap-2 md:w-fit md:justify-items-start">
                        <Lists title="100%" subtitle="Comprometido"/>
                        <Lists title="+3 Anos" subtitle="Experiência"/>
                        <Lists title="Suporte" subtitle="Para você"/>
                        <Lists title="Projeto" subtitle="Personalizado"/>
                    </div>
                </motion.section>

                {/* Image */}
                <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y:0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                    duration: 0.7,
                    ease: "easeOut",
                }}
                className="w-full flex justify-center">
                    <Image 
                    className="w-11/12 h-11/12 object-cover mt-4 
                    md:w-full md:h-full md:mt-0"
                    src={DesignerArt}
                    alt="Desktops Art"
                    />
                </motion.section>
            </main>
        </>
    )
}