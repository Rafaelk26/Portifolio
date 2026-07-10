"use client";
import { useState } from 'react';
import { Cards } from './Cards';

import Photo from '../../../public/image.png';

export type Category = "Todos" | "Sites" | "Sistemas" | "Aplicativos";

export function Projetos(){

    const [selected, setSelected] = useState<Category>("Todos");

    return(
        <>
            <main className="flex flex-col items-center max-w-7xl w-full mx-auto my-20">
                {/* Title Projects */}
                <section className="flex flex-col items-center">
                    <h1 className="font-light font-poppins text-[#52C538]">PORTIFÓLIO</h1>
                    <span className="font-bold font-poppins text-white text-5xl text-center">
                        Projetos que geram resultados
                    </span>

                    {/* Select type project */}
                    <div className="mt-8 flex gap-4">
                        <button
                        onClick={()=> setSelected("Todos")}
                        className={`
                        w-40 h-10 rounded-md border transition-all
                        hover:cursor-pointer hover:scale-105
                        hover:bg-[#52C538] hover:text-black hover:border-[#52C538]
                        hover:shadow-[#6cf74d]/30 hover:shadow-lg

                        ${
                        selected === "Todos"
                            ? "bg-[#092C01] border-[#52C538] text-white"
                            : "bg-[#101319] border-[#242424] text-white"
                        }
                        `}>
                            <span className="font-poppins font-light text-lg px-8">Todos</span>
                        </button>

                        <button
                        onClick={()=> setSelected("Sites")}
                        className={`
                        w-40 h-10 rounded-md border transition-all
                        hover:cursor-pointer hover:scale-105
                        hover:bg-[#52C538] hover:text-black hover:border-[#52C538]
                        hover:shadow-[#6cf74d]/30 hover:shadow-lg

                        ${
                        selected === "Sites"
                            ? "bg-[#092C01] border-[#52C538] text-white"
                            : "bg-[#101319] border-[#242424] text-white"
                        }
                        `}>
                            <span className="font-poppins font-light text-lg px-8">Sites</span>
                        </button>

                        <button
                        onClick={()=> setSelected("Sistemas")}
                        className={`
                        w-40 h-10 rounded-md border transition-all
                        hover:cursor-pointer hover:scale-105
                        hover:bg-[#52C538] hover:text-black hover:border-[#52C538]
                        hover:shadow-[#6cf74d]/30 hover:shadow-lg

                        ${
                        selected === "Sistemas"
                            ? "bg-[#092C01] border-[#52C538] text-white"
                            : "bg-[#101319] border-[#242424] text-white"
                        }
                        `}>
                            <span className="font-poppins font-light text-lg px-8">Sistemas</span>
                        </button>

                        <button
                        onClick={()=> setSelected("Aplicativos")}
                        className={`
                        w-40 h-10 rounded-md border transition-all
                        hover:cursor-pointer hover:scale-105
                        hover:bg-[#52C538] hover:text-black hover:border-[#52C538]
                        hover:shadow-[#6cf74d]/30 hover:shadow-lg

                        ${
                        selected === "Aplicativos"
                            ? "bg-[#092C01] border-[#52C538] text-white"
                            : "bg-[#101319] border-[#242424] text-white"
                        }
                        `}>
                            <span className="font-poppins font-light text-lg px-8">Aplicativos</span>
                        </button>
                    </div>
                </section>

                {/* Cards Projects */}
                <section className="w-full grid grid-cols-4 gap-6 mt-16">
                    <Cards 
                        key={1}
                        nomeProjeto='Projeto 1'
                        descricaoProjeto='Lorem Ipsum is simply dummy text of the printing and typesetting.'
                        srcProjeto={Photo}
                        categoriaProjeto='Sites'
                        linkProjeto='/'
                    />

                    <Cards 
                        key={2}
                        nomeProjeto='Projeto 2'
                        descricaoProjeto='Lorem Ipsum is simply dummy text of the printing and typesetting.'
                        srcProjeto={Photo}
                        categoriaProjeto='Sites'
                        linkProjeto='/'
                    />

                    <Cards 
                        key={3}
                        nomeProjeto='Projeto 3'
                        descricaoProjeto='Lorem Ipsum is simply dummy text of the printing and typesetting.'
                        srcProjeto={Photo}
                        categoriaProjeto='Sites'
                        linkProjeto='/'
                    />

                    <Cards 
                        key={4}
                        nomeProjeto='Projeto 4'
                        descricaoProjeto='Lorem Ipsum is simply dummy text of the printing and typesetting.'
                        srcProjeto={Photo}
                        categoriaProjeto='Sites'
                        linkProjeto='/'
                    />
                </section>
            </main>
        </>
    )
}