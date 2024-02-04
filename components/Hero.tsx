import Link from "next/link";

const Hero = () => {
    return (
        <section id="home" className="relative w-full mt-24 lg:mt-0">
            <video playsInline autoPlay muted loop className="w-full opacity-30" >
                <source src={"/showreel.mp4"} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className='absolute flex flex-col p-2 font-bold tracking-wider text-center transform -translate-x-1/2 -translate-y-1/2 border-2 md:p-8 w-max text-cp0-500 border-cp0-600 top-1/2 left-1/2'>
                <div className='mb-2 text-sm lg:mb-8 lg:text-4xl'>Usługi filmowe</div>
                <div className='flex flex-col gap-2 text-base tracking-wide lg:gap-4 lg:text-5xl'>
                    <span>VIDEO</span>
                    <span>DRON</span>
                    <span>MONTAŻ</span>
                </div>
                <Link href='#offer'>
                    <div className='absolute hidden p-3 duration-300 rounded-md cursor-pointer -bottom-8 left-2/3 bg-cp0-500 group lg:block'>
                        <svg fill="#000000" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <polygon points="289.7,341.3 289.7,0 204.3,0 204.3,341.3 33.7,170.7 33.7,298.7 247,512 460.3,298.7 460.3,170.7 "/>
                        </svg>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Hero;