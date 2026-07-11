import { PiSealCheckFill } from "react-icons/pi";

interface ListsProps{
    title: string;
    subtitle: string;
}
export function Lists({ title, subtitle }: ListsProps){
    return( 
        <div className="w-full flex gap-2 justify-center md:justify-start">
            <PiSealCheckFill size={24} color="#52C538"/>
            <div>
                <h1 className="font-poppins font-bold text-xl">{title}</h1>
                <span className="font-poppins font-light text-sm">{subtitle}</span>
            </div>
        </div>
    )
}