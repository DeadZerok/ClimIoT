"use client"
import { dataCard } from "../data/dataCard"
import InfoCard from "./infoCards";

const DashBoard = () => {
    return (
        <div className="flex flex-col justify-center-safe ">
            <h1 className="text-5xl font-bold ">Datos Actuales</h1>
            <div className="p-6 flex flex-wrap gap-14 mt-22 mx-12 ">
            
            {dataCard.map((infoCards) => (
                <InfoCard
                    key={infoCards.id}
                    id={infoCards.id}
                    icon={infoCards.icon}
                    title={infoCards.title}
                    data={infoCards.dato}
                    subtitle={infoCards.subtitle}>

                </InfoCard>
            ))}
            </div>
        </div>);
}

export default DashBoard;