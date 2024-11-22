import { createClient } from '@/utils/supabase/server';
import { logout } from '@/app/admin/actions';

const EditorMode = async () => {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();

    return (
        data.user && 
            <form className='fixed p-2 font-bold text-black top-24 left-1/2 -translate-x-1/2 bg-cp0-300 z-10 flex'>
                <div>EDITOR MODE</div>
                <button className='ml-4' formAction={logout}>Wyloguj</button>
            </form>
    )
}

export default EditorMode