import { SectionTitle } from "../helper";

export default function Projects(){
    return (
        <section id="projects" className="flex flex-col justify-center">
            <SectionTitle title={"PROJEKTY"} />
            <div className="container px-6 mx-auto md:py-10">

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
                    <div className="flex items-center justify-center w-full h-96">
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/pq4CbeRKvT4?si=e5TCDmr2U4W02zG6" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className="flex items-center justify-center w-full h-96">
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/TCCkRcdhP04?si=S2n9cAixX-zACs3K" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}