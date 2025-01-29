import { Anton } from "next/font/google";
import Image from "next/image";
import { forwardRef } from "react";
import Ab1 from "../../../public/ab1.png";
import Ab2 from "../../../public/ab2.jpg";
import Ab3 from "../../../public/ab3.png";

const anton = Anton({ subsets: ['latin'], weight: "400", variable: "--font-anton" })

const About = forwardRef<HTMLElement>((props, ref) =>{
  return (
    <section ref={ref} className="py-12 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">
        <div className="grid grid-cols-2 w-full lg:w-1/2">
          <div className="bg-gray-300 h-48">
            <Image
              src={Ab2}
              alt="image"
              className="object-cover h-48"
            />
          </div>
          <div className="bg-gray-300 h-48">
            <Image
              src={Ab3}
              alt="image"
              className="object-cover h-48 "
            />
          </div>
          <div className="bg-gray-300 col-span-2 h-48">
            <Image
              src={Ab1}
              alt="image"
              className="object-cover h-48"
            />
          </div>
        </div>
        <div className=" xl:w-1/3 text-justify flex flex-col lg:my-auto">
          <h2 className={`${anton.className} text-primary text-3xl lg:text-4xl text-center lg:text-start mb-4`}>
            Sobre ASBrasil
          </h2>
          <p>
            Na AS Brasil, entendemos que a logística e a coordenação eficazes
            são fundamentais para o sucesso de qualquer evento. Com anos de
            experiência no mercado, somos especialistas em planejar e executar
            pequenos, médios e grandes eventos, garantindo que cada detalhe
            esteja perfeitamente alinhado.
          </p>
          <p>
            De pequenas reuniões a grandes conferências, nós temos a experiência
            e a dedicação para transformar seu evento em um sucesso absoluto.
            Entre em contato conosco e descubra como podemos ajudar a tornar seu
            próximo evento inesquecível!
          </p>
        </div>
      </div>
    </section>
  );
})

export default About;