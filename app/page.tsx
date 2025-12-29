import Offer from '@/components/Offer'
import Contact from "@/components/Contact";
import Attributes from "@/components/Attributes";
import About from '@/components/About';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import Intro from '@/components/Intro';
import { getData } from './admin/actions';

export default async function Home() {
    const data = await getData();

    return (
        <div className="flex flex-col gap-16 bg-black lg:gap-32">
            <Intro />
            <Hero />
            <Offer data={data} />
            <About />
            <Attributes />
            <Pricing />
            <Contact />
        </div>
    )
}
