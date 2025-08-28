import { FaTemperatureHalf, FaDroplet,  } from "react-icons/fa6";
import { TbTemperatureSun } from "react-icons/tb";
import { WiRaindrops } from "react-icons/wi";

export const dataCard = [
    {
        id: "1",
        title: "Temperatura",
        dato: "25 C",
        icon: <FaTemperatureHalf color="#FC6D6D"/>,
        subtitle: "25 Ago, 20:05",
    },

    {
        id: "2",
        title: "Humedad",
        dato: "47 %",
        icon: <FaDroplet color="#6DBAFC "/>,
        subtitle: "25 Ago, 20:05",
    },
    {
        id: "3",
        title: "Punto rosio",
        dato:"11.1 C",
        icon: <WiRaindrops  className="scale-300" color="#6DBAFC"/>,
        subtitle: "25 Ago, 20:05",
    },
    {
        id: "4",
        title: "Sensacion Termica",
                
        dato: "26.5 C",
        icon: <TbTemperatureSun color="#FC6D6D"/>,
        subtitle: " 25 Ago, 20:05",
    },

]