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
  const supabase = await createClient();
  let { data, error } = await supabase
      .from("all_movies")
      .select('*')

  if (error) {
    console.log(error);
    return null;
  }

  return data;
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
