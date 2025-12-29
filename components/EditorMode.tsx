"use client"

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { logout } from '@/app/admin/actions';
import { User } from '@supabase/supabase-js';

const EditorMode = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const checkUser = async () => {
            const supabase = createClient();
            const { data } = await supabase.auth.getUser();
            setUser(data.user);
        };
        checkUser();
    }, []);

    if (!user) return null;

    return (
        <form className='p-1.5 sm:p-2 font-bold text-black bg-cp0-300 flex items-center gap-2 sm:gap-4 text-xs sm:text-sm max-w-fit mx-auto'>
            <div>EDITOR MODE</div>
            <button className='ml-2 sm:ml-4' formAction={logout}>Wyloguj</button>
        </form>
    )
}

export default EditorMode