import Image from "next/image";
import { Button1 } from "../Button1";
import { Button2 } from "../Button2";
import { Lists } from "../Lists";

import DesignerArt from '../../../public/Desktops.png';

export function Inicio(){
    return(
        <>
            <main className="flex max-w-7xl w-full mx-auto" id="inicio">
                {/* Writes */}
                <section className="w-full flex flex-col gap-6 justify-center">
                    <h1 className="font-light font-poppins text-[#52C538]">DESENVOLVEDOR WEB & MOBILE</h1>
                    <span className="font-bold font-poppins text-white text-5xl">
                        Soluções digitais que
                        <h1 className="text-[#52C538]">
                            transformam negócios
                        </h1>
                    </span>

                    <span className="font-light font-poppins text-lg">Desenvolvimento de sites e aplicativos para o seu negócio de forma eficaz e robusta, totalmente personalizado de acordo com o seu negócio próprio.
                    </span>

                    <div className="w-full">
                        <div className="flex gap-6">
                            <Button2 />
                            <Button1 />
                        </div>

                        <div>

                        </div>
                    </div>

                    <div className="flex gap-5">
                        <Lists title="100%" subtitle="Comprometido"/>
                        <Lists title="+3 Anos" subtitle="Experiência"/>
                        <Lists title="Suporte" subtitle="Para você"/>
                        <Lists title="Projeto" subtitle="Personalizado"/>
                    </div>
                </section>
                {/* Image */}
                <section className="w-full">
                    <Image 
                    className="w-full h-full"
                    src={DesignerArt}
                    alt="Desktops Art"
                    />
                </section>
            </main>
        </>
    )
}