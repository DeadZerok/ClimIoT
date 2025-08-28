"use client";
import React, { useEffect, useState } from "react";
import InfoCard from "./infoCards";
import { database } from "@/lib/firebase"; // 👈 ajusta la ruta
import { ref, onValue } from "firebase/database";

// Iconos
import { FaTemperatureHalf, FaDroplet } from "react-icons/fa6";
import { TbTemperatureSun } from "react-icons/tb";
import { WiRaindrops } from "react-icons/wi";

interface CardData {
    id: string;
    title: string;
    dato: string;
    icon: React.ReactElement;
    subtitle: string;
}

interface ClimData {
    Temperatura: number;
    humedad: number;
    punto_rocio: number;
    Sensacion_Termica: number;
}

const DashBoard = () => {
    const [dataCard, setDataCard] = useState<CardData[]>([]);

    useEffect(() => {
        const dataRef = ref(database, "ActualDatos");

        const unsubscribe = onValue(dataRef, (snapshot) => {
            if (snapshot.exists()) {
                const climData = snapshot.val() as ClimData;

                setDataCard([
                    {
                        id: "1",
                        title: "Temperatura",
                        dato: `${climData.Temperatura} C`,
                        icon: <FaTemperatureHalf color="#FC6D6D" />,
                        subtitle: new Date().toLocaleString(),
                    },
                    {
                        id: "2",
                        title: "Humedad",
                        dato: `${climData.humedad} %`,
                        icon: <FaDroplet color="#6DBAFC" />,
                        subtitle: new Date().toLocaleString(),
                    },
                    {
                        id: "3",
                        title: "Punto rocío",
                        dato: `${climData.punto_rocio} C`,
                        icon: <WiRaindrops  className="scale-210" color="#6DBAFC" />,
                        subtitle: new Date().toLocaleString(),
                    },
                    {
                        id: "4",
                        title: "Sensación Térmica",
                        dato: `${climData.Sensacion_Termica} C`,
                        icon: <TbTemperatureSun color="#FC6D6D" />,
                        subtitle: new Date().toLocaleString(),
                    },
                ]);
            }
        });

        return () => unsubscribe(); // limpiar listener al desmontar
    }, []);

    return (
        <div className="flex flex-col justify-center-safe">
            <h1 className="text-5xl font-bold">Datos Actuales</h1>
            <div className="p-6 flex flex-wrap gap-14 mt-22 mx-12">
                {dataCard.map((infoCards) => (
                    <InfoCard
                        key={infoCards.id}
                        id={infoCards.id}
                        icon={infoCards.icon}
                        title={infoCards.title}
                        data={infoCards.dato}
                        subtitle={infoCards.subtitle}
                    />
                ))}
            </div>
        </div>
    );
};

export default DashBoard;
