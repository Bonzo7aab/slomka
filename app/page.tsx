import Offer from '@/components/Offer'
import Contact from "@/components/Contact";
import Attributes from "@/components/Attributes";
import About from '@/components/About';
import Logos from '@/components/Logos';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';

export default function Home() { 
    return (
        <div className="flex flex-col gap-16 bg-black lg:gap-32">
            <Hero />
            <Offer />
            <About />
            <Attributes />
            <Pricing />
            {/* <Logos /> */}
            <Contact />
        </div>
    )
}
