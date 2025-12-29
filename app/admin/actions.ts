'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { User } from '@supabase/supabase-js';
import { AllMovies } from '@/lib/databaseTypes';

export async function logout() {  
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser()
  
  if (user) {
    await supabase.auth.signOut()
  }
  
  revalidatePath('/', 'layout')
  redirect('/admin')
}


export const getUser = async (): Promise<User | null> => {
  const supabase = await createClient();

  const {
    data: { user }, error
  } = await supabase.auth.getUser();

  if (!user) {
    console.log('NO USER', user);
    return null;
  }

  if (error) {
    console.log(error);
    return null;
  }

  return user;
};

export const getData = async (): Promise<AllMovies[] | null> => {
  try {
    // Validate environment variables
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY) {
      console.error('Missing Supabase environment variables');
      return null;
    }

    const supabase = await createClient();
    let { data, error } = await supabase
        .from("all_movies")
        .select('*')

    if (error) {
      console.error('Supabase query error:', error);
      return null;
    }

    return data;
  } catch (err) {
    console.error('Error in getData:', err);
    // If it's a fetch error, provide more context
    if (err instanceof Error && err.message.includes('fetch')) {
      console.error('Fetch failed - check Supabase URL and network connectivity');
      console.error('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing');
    }
    return null;
  }
}

export async function addMovie (movie_category: string, videos: string[] | null, movie_id: string) {
  const supabase = await createClient();
  const addedVideo = videos ? [movie_id, ...videos] : [movie_id];

  const { data, error } = await supabase
    .from('all_movies')
      .update({ videos: addedVideo })
      .eq('name', movie_category)

  if (error) {
    console.log(error);
    return null;
  }

  return data;
}

export async function updateMovie(movie_category: string, videos: string[] | null, movie_id: string, new_movie_id: string) {
  const supabase = await createClient();
  const updateVideo = videos!.map(id => id === movie_id ? new_movie_id : id);

  const { data, error } = await supabase
    .from('all_movies')
      .update({ videos: updateVideo })
      .eq('name', movie_category)

  if (error) {
    console.log(error);
    return null;
  }

  return data;
}

export async function deleteMovie(movie_category: string, videos: string[] | null, movie_id: string) {
  const supabase = await createClient();
  const updateVideo = videos!.filter(id => id != movie_id);

  const { data, error } = await supabase
    .from('all_movies')
      .update({ videos: updateVideo })
      .eq('name', movie_category)
      .select()

  if (error) {
    console.log(error);
    return null;
  }

  return data;
}

export async function reorderMovie(movie_category: string, videos: string[] | null, movie_id: string, direction: 'up' | 'down') {
  const supabase = await createClient();
  
  if (!videos || videos.length <= 1) {
    return null;
  }

  const currentIndex = videos.indexOf(movie_id);
  
  if (currentIndex === -1) {
    return null;
  }

  // Check boundary conditions
  if (direction === 'up' && currentIndex === 0) {
    return null;
  }
  
  if (direction === 'down' && currentIndex === videos.length - 1) {
    return null;
  }

  // Create a copy of the array
  const reorderedVideos = [...videos];
  
  // Swap elements
  const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
  [reorderedVideos[currentIndex], reorderedVideos[targetIndex]] = [reorderedVideos[targetIndex], reorderedVideos[currentIndex]];

  const { data, error } = await supabase
    .from('all_movies')
    .update({ videos: reorderedVideos })
    .eq('name', movie_category)
    .select()

  if (error) {
    console.log(error);
    return null;
  }

  return data;
}
