import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function Button1(){
    return(
        <>
            <Link href={""}>
                <button 
                className="bg-transparent font-poppins font-bold py-3 px-6 border border-white/50 rounded-lg flex gap-4
                hover:cursor-pointer hover:scale-105 transition-all hover:bg-[#52C538] hover:text-[#eeffea] hover:border-[#52C538]
                hover:shadow-[#6cf74d]/30 hover:shadow-lg">
                    Falar no WhatsApp
                    <FaWhatsapp className="fill-current" size={24} />
                </button>
            </Link>
            
        </>
    )
}