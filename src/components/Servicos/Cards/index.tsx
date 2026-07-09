import Link from "next/link";
import { RiArrowRightLongLine } from "react-icons/ri";
import { SlScreenDesktop } from "react-icons/sl";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { SlScreenSmartphone } from "react-icons/sl";

interface CardsProps{
    title: string;
    description: string;
    icon: "SlScreenDesktop" | "HiOutlineShoppingBag" | "SlScreenSmartphone";
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    link: string;
}

export function Cards({ title, description, icon, item1, item2, item3, item4, link }: CardsProps){
    return(
        <>
            <div className="max-w-1/3 w-full bg-[#0c121d] py-10 px-6 rounded-2xl">
                <div className="flex gap-6">
                    {icon === "SlScreenDesktop" && <SlScreenDesktop size={70} color="#52C538"/>}
                    {icon === "HiOutlineShoppingBag" && <HiOutlineShoppingBag size={70} color="#52C538"/>}
                    {icon === "SlScreenSmartphone" && <SlScreenSmartphone size={70} color="#52C538"/>}
                    <div className="w-full">
                        <h1 className="font-poppins font-bold text-2xl">{title}</h1>
                        <span className="font-poppins font-light text-sm">{description}</span>

                        <ul className="list-disc ml-4 my-6 font-poppins font-light text-sm flex flex-col gap-1">
                            <li>{item1}</li>
                            <li>{item2}</li>
                            <li>{item3}</li>
                            <li>{item4}</li>
                        </ul>
                        
                        <Link href={link}>
                            <button className="flex gap-3 text-[#52C538] transition-all
                            hover:text-white hover:cursor-pointer">
                                <span className="text-normal font-poppins font-light">Saiba mais</span>
                                <RiArrowRightLongLine className="fill-current" size={24} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}