import { ReactNode } from "react";

interface InfoCardProps {
    id: string;
    icon: ReactNode;
    title: string;
    data: string;
    subtitle?: string;
}
const InfoCard = ({ id, icon, title, data, subtitle }: InfoCardProps) => {
    return (
        <div key={id} className=" flex flex-col  bg-white rounded-2xl drop-shadow-md  w-80 overflow-hidden">
            <div className="h-[5px] background-card w-full  "></div>
            <div className="flex justify-between items-center p-8">
                <div className="text-5xl ">{icon}</div>
                <div>
                    <h3 className="text-2xl font-bold font-primary mb-4" >{title}</h3>
                    <p className="text-5xl font-extrabold font-secundary mb-4">{data}</p>
                    {subtitle && <p className="text-sm text-[#687280] font-secundary">{subtitle}</p>}
                </div>
            </div>

        </div>
    );
}

export default InfoCard;


