import Introduction from "@/components/introduction";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (

    <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
      {/* Sección 1 */}
      <section
        id="inicio"
        className="h-screen flex items-center justify-center bg-blue-500 snap-start"
      >
        <Introduction />

      </section>

      <section
        id="datos"
        className="h-screen flex items-center justify-center  snap-start bg-amber-400"
      >
        <h1 className="text-5xl font-bold text-white ">Datos</h1>
      </section>

    </main>

  );
}
