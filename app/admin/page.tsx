import { Skeleton } from '@/components/ui/skeleton'
import { AddMovie, VideoSection } from '@/components/AdminVideos'
import { getData, getUser } from './actions';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
    const user = getUser();
    if(!user) return redirect('/admin')

    const data = await getData();
    if(!data) return <Skeleton />

    const reversedData = data.reverse();

    return (
        <div className='flex justify-center items-center bg-black text-white flex-col pt-32 sm:pt-40 px-4 sm:px-0'>
            <div className='w-full max-w-7xl'>
                {reversedData.map((el, index) => (
                    <div key={el.id}>
                        <VideoSection sectionData={el} />
                        {index < reversedData.length - 1 && (
                            <div className='w-full h-px bg-cp0-400 my-4'></div>
                        )}
                    </div>
                ))}
                <AddMovie data={data}/>
            </div>
        </div>
    )
}