import Introduction from "@/components/introduction";
import SectionDatos from "@/components/sectionDatos";


export default function Home() {
  return (

    <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
      {/* Sección 1 */}
      <section
        id="inicio" >
        <Introduction />

      </section>

      <section id="datos" className="h-screen  snap-start ">
        
        <SectionDatos />
        
      </section>

    </main>

  );
}
