"use client"

import { MotionDiv, MotionImg } from "@/components/Motion";
import SectionTitle from "./SectionTitle";
import { Link as ScrollLink } from 'react-scroll';

export default function About(){
    return (
        <section id="about" className="flex flex-col">
            <SectionTitle title={"O MNIE"} />

            <div className="container relative flex flex-col gap-8 px-8 mx-auto text-lg leading-relaxed tracking-wider text-white bg-black md:p-16 lg:flex-row lg:items-center md:border-2 border-cp0-600 md:drop-shadow-md md:rounded-sm">
                <MotionDiv 
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.1, duration: 1, ease: "easeInOut" }}
                    whileInView={{ opacity: 1 }}
                    className="w-full lg:text-right lg:w-1/3"
                >
                    Cześć. Nazywam się <span className="underline underline-offset-4 decoration-cp0-400">Michał Słomka</span> i witam Cię na mojej stronie usługowej z zakresu video/montaż.
                    <br /><br />
                    Moje wykształcenie: Dyplom zawodowy jako „montażysta” w Akademii Filmu i Telewizji. Ukończyłem także Warszawską Szkołę Reklamy na specjalizacji Realizacja Filmowa i Telewizyjna. 
                    Poszerzyłem także swoje umiejętności jako operator <ScrollLink to='drone' spy={true} smooth={true} duration={500} offset={-120} className="cursor-pointer text-cp0-400">drona</ScrollLink>. 
                    Staram się realizować usługi indywidualnie pod potrzeby klienta na każdym etapie produkcji z dbałością o każdy szczegół dlatego także CENY usług są zawsze dopasowane indywidualnie.
                    <br /><br />
                    Wykorzystuję najlepszej jakości sprzęt filmowy, który zawsze mogę dopasować do potrzeb klienta.
                    Wszystkie realizacje charakteryzują się wysoką jakością, ale także kreatywnością i dbałością o detale.
                </MotionDiv>
                <MotionImg
                    initial={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="block object-cover h-full mx-auto border-2 lg:w-1/3 drop-shadow-sm border-cp0-600" src="/about.jpg" alt="profile"
                />
                <MotionDiv 
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.1, duration: 1, ease: "easeInOut" }}
                    whileInView={{ opacity: 1 }}
                    className="w-full lg:w-1/3"
                >
                    Moje usługi:
                    <li className="text-cp0-400"><span className="text-white">wesela (w kraju jak i poza krajem)</span></li>
                    <li className="text-cp0-400"><span className="text-white">studniówki - relacje z eventów</span></li>
                    <li className="text-cp0-400"><span className="text-white">teledyski - usługi dla firm (wywiady, filmy wewnątrz-firmowe)</span></li>
                    <li className="text-cp0-400"><span className="text-white">Social media</span></li>
                    <li className="text-cp0-400"><span className="text-white">obsługa promptera</span></li>
                    <li className="text-cp0-400"><span className="text-white">filmy produktowe</span></li>
                    <br />
                    Posiadam stację montażową w formie stacjonarnej jak i mobilnej dzięki czemu moja współpraca z klientem jest wygodniejsza i bardziej efektywna dla obu stron.
                    <br /><br />
                    Serdecznie zapraszam do <ScrollLink to='contact' spy={true} smooth={true} duration={500} offset={-120} className="cursor-pointer text-cp0-400">kontaktu</ScrollLink>
                </MotionDiv>
            </div>
        </section>
    )
}