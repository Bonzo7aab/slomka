import { Skeleton } from '@/components/ui/skeleton'
import { AddMovie, VideoSection } from '@/components/AdminVideos'
import { getData, getUser } from './actions';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
    const user = getUser();
    if(!user) return redirect('/admin')

    const data = await getData();
    if(!data) return <Skeleton />

    return (
        <div className='flex justify-center bg-black text-white flex-col pt-40'>
            {data.reverse().map(el => <VideoSection key={el.id} sectionData={el} />)}
            <AddMovie data={data}/>
        </div>
    )
}