"use client";
import { useState } from 'react';

type Category = "all" | "sites" | "systems" | "app";

export function Projetos(){

    const [selected, setSelected] = useState<Category>("all");

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
                        onClick={()=> setSelected("all")}
                        className={`
                        w-40 h-10 rounded-md border transition-all
                        hover:cursor-pointer hover:scale-105
                        hover:bg-[#52C538] hover:text-black hover:border-[#52C538]
                        hover:shadow-[#6cf74d]/30 hover:shadow-lg

                        ${
                        selected === "all"
                            ? "bg-[#092C01] border-[#52C538] text-white"
                            : "bg-[#101319] border-[#242424] text-white"
                        }
                        `}>
                            <span className="font-poppins font-light text-lg px-8">Todos</span>
                        </button>

                        <button
                        onClick={()=> setSelected("sites")}
                        className={`
                        w-40 h-10 rounded-md border transition-all
                        hover:cursor-pointer hover:scale-105
                        hover:bg-[#52C538] hover:text-black hover:border-[#52C538]
                        hover:shadow-[#6cf74d]/30 hover:shadow-lg

                        ${
                        selected === "sites"
                            ? "bg-[#092C01] border-[#52C538] text-white"
                            : "bg-[#101319] border-[#242424] text-white"
                        }
                        `}>
                            <span className="font-poppins font-light text-lg px-8">Sites</span>
                        </button>

                        <button
                        onClick={()=> setSelected("systems")}
                        className={`
                        w-40 h-10 rounded-md border transition-all
                        hover:cursor-pointer hover:scale-105
                        hover:bg-[#52C538] hover:text-black hover:border-[#52C538]
                        hover:shadow-[#6cf74d]/30 hover:shadow-lg

                        ${
                        selected === "systems"
                            ? "bg-[#092C01] border-[#52C538] text-white"
                            : "bg-[#101319] border-[#242424] text-white"
                        }
                        `}>
                            <span className="font-poppins font-light text-lg px-8">Sistemas</span>
                        </button>

                        <button
                        onClick={()=> setSelected("app")}
                        className={`
                        w-40 h-10 rounded-md border transition-all
                        hover:cursor-pointer hover:scale-105
                        hover:bg-[#52C538] hover:text-black hover:border-[#52C538]
                        hover:shadow-[#6cf74d]/30 hover:shadow-lg

                        ${
                        selected === "app"
                            ? "bg-[#092C01] border-[#52C538] text-white"
                            : "bg-[#101319] border-[#242424] text-white"
                        }
                        `}>
                            <span className="font-poppins font-light text-lg px-8">Aplicativos</span>
                        </button>
                    </div>
                </section>

                {/* Cards Projects */}
                <section className="w-full flex gap-6 mt-16">
                    
                </section>
            </main>
        </>
    )
}