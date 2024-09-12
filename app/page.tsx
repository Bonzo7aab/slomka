import Offer from '@/components/Offer'
import Contact from "@/components/Contact";
import Attributes from "@/components/Attributes";
import About from '@/components/About';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import Intro from '@/components/Intro';
import { cookies } from 'next/headers';

export default function Home() {
    return (
        <div className="flex flex-col gap-16 bg-black lg:gap-32">
            {cookies().get('session_intro')?.value === 'true' || <Intro />}
            <Hero />
            <Offer />
            <About />
            <Attributes />
            <Pricing />
            <Contact />
        </div>
    )
}
