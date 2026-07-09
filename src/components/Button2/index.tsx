import Link from "next/link";
import { RiArrowRightLongLine } from "react-icons/ri";

export function Button2(){
    return(
        <>
            <Link href={"#projetos"}>
                <button 
                className="bg-[#52C538] font-poppins font-bold text-black py-3 px-6 border border-[#52C538] rounded-lg flex gap-4 shadow-[#6cf74d]/30 shadow-lg
                hover:cursor-pointer hover:scale-105 transition-all hover:text-[#eeffea] hover:border-white/20 hover:shadow-sm">
                    Ver Portifólio
                    <RiArrowRightLongLine className="fill-current" size={24} />
                </button>
            </Link>
        </>
    )
}