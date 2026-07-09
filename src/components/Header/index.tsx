"use client";

import Link from "next/link";
import Image from "next/image";

import { Button1 } from '@/components/Button1'
import Logo from '../../../public/Logo RK.png';

export function Header(){
    return(
        <>
            <header className="w-full flex justify-between items-center py-5 px-10 border-b border-white/10 shadow-lg shadow-white/3">
                <Image 
                className="w-16 h-16"
                src={Logo}
                alt="Logo RK"
                />
                <nav className="">
                    <ul className="flex gap-10 font-poppins font-normal">
                        <Link href={"#inicio"}>
                            <li className="hover:cursor-pointer hover:text-[#52C538] transition-all text-lg">Ínicio</li>
                        </Link>
                        <Link href={"#servicos"}>
                            <li className="hover:cursor-pointer hover:text-[#52C538] transition-all text-lg">Serviços</li>
                        </Link>
                        <Link href={"#projetos"}>
                            <li className="hover:cursor-pointer hover:text-[#52C538] transition-all text-lg">Projetos</li>
                        </Link>
                        <Link href={"#contato"}>
                            <li className="hover:cursor-pointer hover:text-[#52C538] transition-all text-lg">Contato</li>
                        </Link>
                    </ul>
                </nav>
                <Button1 />
            </header>
        </>
    )
}