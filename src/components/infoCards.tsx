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
            <div className="flex items-center p-7 mt-6">
                <div className="text-5xl mr-6 ">{icon}</div>
                <div className="flex flex-col justify-around  ">
                    <h3 className="text-2xl font-bold font-primary mb-2" >{title}</h3>
                    <p className="text-5xl font-extrabold font-secundary mb-4 text-center">{data}</p>
                    {subtitle && <p className="text-sm text-[#687280] font-secundary text-center">{subtitle}</p>}
                </div>
            </div>

        </div>
    );
}

export default InfoCard;


 