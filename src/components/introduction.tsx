import Link from "next/link";
import Card from "./card";

const Introduction = () => {
    return (

        <Card>

            <h2 className="font-primary  text-6xl font-bold text-white leading-tight mb-4 drop-shadow-md ">Tu Entorno, <br /> En Armonía</h2>
            <p className=" text-xl  font-secundary text-white">Visualiza temperatura, humedad y más con una interfaz suave y minimalista.</p>
            <div className="mt-8 px-6 py-3 font-bold font-secundary text-lg bg-amarillo rounded-full drop-shadow-lg hover:bg-[#fdd76d] hover:scale-110 ">
                <Link
                    href="#datos"
                >
                    <h2 className="">Ver datos ahora</h2>
                </Link>
            </div>

        </Card>



    );
}

export default Introduction;