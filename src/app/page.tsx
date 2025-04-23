import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Hero sectie */}
        <section className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white py-20">
          <h1 className="text-4xl font-bold mb-4">Welkom bij Salting</h1>
          <p className="text-lg text-gray-700 max-w-xl text-center">Jouw partner voor moderne weboplossingen. Wij bouwen schaalbare, onderhoudbare en mooie applicaties.</p>
        </section>

        {/* Over sectie */}
        <section className="flex-1 flex flex-col items-center justify-center bg-white py-20 border-t">
          <h2 className="text-2xl font-semibold mb-2">Over ons</h2>
          <p className="text-gray-600 max-w-lg text-center">Salting is gespecialiseerd in het ontwikkelen van digitale producten met een focus op eenvoud, kwaliteit en snelheid. Ons team bestaat uit ervaren ontwikkelaars en designers.</p>
        </section>

        {/* Diensten sectie */}
        <section className="flex-1 flex flex-col items-center justify-center bg-gray-50 py-20 border-t">
          <h2 className="text-2xl font-semibold mb-2">Diensten</h2>
          <ul className="text-gray-600 max-w-lg text-center list-disc list-inside">
            <li>Webapplicatie ontwikkeling</li>
            <li>UX/UI design</li>
            <li>Consultancy & advies</li>
            <li>Onderhoud & support</li>
          </ul>
        </section>

        {/* Contact sectie */}
        <section className="flex-1 flex flex-col items-center justify-center bg-white py-20 border-t">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p className="text-gray-600 max-w-lg text-center">Neem contact met ons op voor een vrijblijvend gesprek of offerte. We denken graag met je mee!</p>
          <a href="mailto:info@salting.nl" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Mail ons</a>
        </section>
      </div>
    </>
  );
}
