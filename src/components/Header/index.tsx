"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";

import { Button1 } from '@/components/Button1'
import Logo from '../../../public/Logo RK.png';

export function Header(){

    const [menu, setMenu] = useState(false);

    return(
        <>
            <header className="w-full justify-center flex py-5 px-10 border-b border-white/10 shadow-lg shadow-white/3
            md:justify-between md:items-center">
                
                {/* MENU DESKTOP */}
                <Image 
                className="w-16 h-16"
                src={Logo}
                alt="Logo RK"
                />

                {!menu && (
                    <>
                        <div className="flex md:hidden absolute mt-4 right-8">
                            <IoMenu 
                            onClick={()=> setMenu(true)}
                            size={36} 
                            color="#fff" />
                        </div>
                    </>
                )}

                <nav className="hidden md:flex">
                    <ul className="flex gap-10 font-poppins font-normal">
                        <Link 
                        onClick={()=> setMenu(false)}
                        href={"#inicio"}>
                            <li className="hover:cursor-pointer hover:text-[#52C538] transition-all text-lg">Ínicio</li>
                        </Link>
                        <Link 
                        onClick={()=> setMenu(false)}
                        href={"#servicos"}>
                            <li className="hover:cursor-pointer hover:text-[#52C538] transition-all text-lg">Serviços</li>
                        </Link>
                        <Link 
                        onClick={()=> setMenu(false)}
                        href={"#projetos"}>
                            <li className="hover:cursor-pointer hover:text-[#52C538] transition-all text-lg">Projetos</li>
                        </Link>
                        <Link 
                        onClick={()=> setMenu(false)}
                        href={"#contato"}>
                            <li className="hover:cursor-pointer hover:text-[#52C538] transition-all text-lg">Contato</li>
                        </Link>
                    </ul>
                </nav>
                <div className="hidden md:flex">
                    <Button1 />
                </div>

                
                {/* MENU MOBILE */}
                <div className={`fixed inset-0 z-50 flex flex-col items-center gap-16 pt-10 w-full h-screen bg-black/95 transform transition-all duration-500 ease-in-out
                ${ menu ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible" }`}>
                    {/* Close Button */}
                    <FaXmark 
                    onClick={()=> setMenu(false)}
                    className="absolute top-13 right-8"
                    size={44} 
                    color="#ff1011" />

                    <Image 
                        className="w-16 h-16"
                        src={Logo}
                        alt="Logo RK"
                    />

                    <nav>
                        <ul className="flex flex-col gap-5 font-poppins font-normal items-center">
                            <Link 
                            onClick={()=> setMenu(false)}
                            href={"#inicio"}>
                                <li className="hover:cursor-pointer hover:text-[#52C538] transition-all text-lg">Ínicio</li>
                            </Link>
                            <Link 
                            onClick={()=> setMenu(false)}
                            href={"#servicos"}>
                                <li className="hover:cursor-pointer hover:text-[#52C538] transition-all text-lg">Serviços</li>
                            </Link>
                            <Link 
                            onClick={()=> setMenu(false)}
                            href={"#projetos"}>
                                <li className="hover:cursor-pointer hover:text-[#52C538] transition-all text-lg">Projetos</li>
                            </Link>
                            <Link 
                            onClick={()=> setMenu(false)}
                            href={"#contato"}>
                                <li className="hover:cursor-pointer hover:text-[#52C538] transition-all text-lg">Contato</li>
                            </Link>
                        </ul>
                    </nav>
                    <div 
                    onClick={()=> setMenu(false)}
                    className="w-full flex justify-center">
                        <Button1 />
                    </div>
                </div>
            </header>
        </>
    )
}