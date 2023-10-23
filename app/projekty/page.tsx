export default function Projects(){
    return (
        <section className="my-24">
            <div className="container px-6 py-10 mx-auto">
                <div className="max-w-xl sm:text-center md:mx-auto">
                    <h1 className="text-2xl font-semibold text-center capitalize text-cp2 lg:text-3xl">
                        Portfolio
                    </h1>
                    <div className="mt-6">
                        <span className="inline-block w-1 h-1 rounded-full bg-cp2"></span>
                        <span className="inline-block w-3 h-1 mx-1 rounded-full bg-cp2"></span>
                        <span className="inline-block h-1 rounded-full w-14 bg-cp2"></span>
                        <span className="inline-block w-3 h-1 mx-1 rounded-full bg-cp2"></span>
                        <span className="inline-block w-1 h-1 rounded-full bg-cp2"></span>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">

                    <div className="flex items-center justify-center w-full h-96">
                        <iframe className="w-full h-full"  src="https://www.youtube.com/embed/uCHARLUWwuY?si=l0RuqDb-vNRL-dTt" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>

                    <div className="flex items-center justify-center w-full h-96">
                        <iframe className="w-full h-full"  src="https://www.youtube.com/embed/f4hcvSoPrp8?si=i05WHqv17jfvyjrQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>

                    <div className="flex items-center justify-center w-full h-96">
                        <iframe className="w-full h-full"  src="https://www.youtube.com/embed/qBRq8EIwrHY?si=-xQMYyOeeB6OE-5W" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>

                    <div className="flex items-center justify-center w-full h-96">
                        <iframe className="w-full h-full"  src="https://www.youtube.com/embed/bFOXfwIx484?si=QP_WoAVD4XkctIBC" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}