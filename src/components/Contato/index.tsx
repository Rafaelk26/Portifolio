import Image from "next/image";
import { Button1 } from "../Button1";

import DesignerArt from '../../../public/Whatsapp.png';

export function Contato(){
    return(
        <>
            <main className="flex flex-col max-w-7xl w-full gap-4 mx-auto my-20 items-center justify-center
            md:flex-row">
                {/* Image */}
                <section className="w-full flex flex-col items-center md:flex-row">
                    <Image 
                    className="w-80 h-80 md:w-full md:h-full object-cover"
                    src={DesignerArt}
                    alt="Desktops Art"
                    />
                </section>

                {/* Writes */}
                <section className="w-full flex flex-col gap-6 items-center md:justify-center md:items-start">
                    <h1 className="font-light font-poppins text-[#52C538]">CONTATO</h1>
                    <span className="font-bold font-poppins text-white text-4xl text-center 
                    md:text-start md:text-5xl">
                        Envie uma mensagem
                        <h1 className="text-[#52C538]">
                            que iremos retornar
                        </h1>
                    </span>

                    <span className="w-11/12 font-light font-poppins text-lg text-center 
                    md:text-start md:w-full">
                        Desenvolvimento de sites e aplicativos para o seu negócio de forma eficaz e robusta, totalmente personalizado de acordo com o seu negócio próprio.
                    </span>

                    <div className="w-full">
                        <div className="flex flex-col items-center gap-6 md:flex-row">
                            <Button1 />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}