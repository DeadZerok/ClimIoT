"use client"

import Link from "next/link";

const Navbar = () => {
    return (
        <div className="fixed top-3 left-0 right-3 mx-3 z-50">
            <div className="  bg-white rounded-b-2xl shadow-lg  ">
                <div className="flex justify-around   ">
                    <Link href="/">
                        <h1 className=" group text-2xl py-4 font-bold hover:scale-110">Clim
                            <span className="group-hover:text-verde">IoT</span>
                        </h1>
                    </Link>

                    <div className="flex gap-5 my-5 text-lg text-gray-600 ">

                        <Link href="#inicio">
                            <h1 className="px-2 bottom-Navbar">Inicio</h1>
                        </Link>
                        <Link href="#datos"><h1 className="px-2 bottom-Navbar ">Datos</h1></Link>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Navbar;

