import Offer from '@/components/Offer'
import Contact from "@/components/Contact";
import Attributes from "@/components/Attributes";
import About from '@/components/About';
import Link from 'next/link';

const Hero = () => {
    return (
        <section id="home" className="relative w-full mt-24">
            <img className="w-full duration-700 opacity-60 hover:blur-sm" src="/tlo.png" alt="tlo" />
            <div className='absolute flex flex-col p-2 font-bold tracking-wider text-center duration-700 transform -translate-x-1/2 -translate-y-1/2 border-2 md:p-8 w-max hover:backdrop-blur-none text-cp0-500 border-cp0-600 top-1/2 left-1/2 backdrop-blur-sm'>
                <div className='mb-2 text-sm md:mb-8 md:text-4xl'>Usługi filmowe</div>
                <div className='flex flex-col gap-2 text-base tracking-wide md:gap-4 md:text-5xl'>
                    <p>VIDEO</p>
                    <p>DRON</p>
                    <p>MONTAŻ</p>
                </div>

                <Link href='#offer'>
                    <div className='absolute hidden p-3 duration-300 rounded-md cursor-pointer -bottom-8 left-2/3 bg-cp0-500 group md:block'>
                        <svg fill="#000000" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <polygon points="289.7,341.3 289.7,0 204.3,0 204.3,341.3 33.7,170.7 33.7,298.7 247,512 460.3,298.7 460.3,170.7 "/>
                        </svg>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default function Home() {
    return (
        <div className="flex flex-col gap-16 bg-black lg:gap-32">
            <Hero />
            <Offer />
            <About />
            <Attributes />
            <Contact />
        </div>
    )
}
