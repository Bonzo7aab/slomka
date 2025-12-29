import MoreVideos from "@/components/MoreVideos";
import { getData } from "../admin/actions";
import { Skeleton } from "@/components/ui/skeleton";

export default async function VideosWrapper(){
    const data = await getData();

    return (
        <section id="films" className="flex flex-col items-center bg-black">
            <div className="container my-28">
                {data 
                    ? <MoreVideos data={data} />
                    : <Skeleton />
                }
            </div>
        </section>
    )
}
