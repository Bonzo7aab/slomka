"use client"

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { AllMovies } from "@/lib/databaseTypes";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { thumbnailParser, urlParser } from "@/utils/helpers";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { addMovie, deleteMovie, updateMovie, reorderMovie } from "@/app/admin/actions";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { ChevronUp, ChevronDown } from "lucide-react";

export const names: {[key: string]: string} = {
    ["movies"]: "Video",
    ["drone"]: "Dron",
    ["editing"]: "Montaż"
}

export const AddMovie = ({ data }: { data: AllMovies[] }) => {
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const form = useForm({
        defaultValues: {
            movie_category: "movies",
            movie_id: ""
        },
    });
    
    const onSubmit = (event: any) => {
        const videos = data.find(category => category.name === event.movie_category)!.videos
        const response = addMovie(event.movie_category, videos, event.movie_id)

        
        if(response != null) {
            toast.success('Film usunięty')
        } else {
            toast.error('Błąd usuwania filmu. Skontaktuj się z adminem.')
        }
        setOpen(false)
        router.refresh()
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-green-500 hover:bg-green-600 fixed bottom-8 right-8 p-8 text-2xl">Dodaj</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <DialogHeader>
                            <DialogTitle>Dodaj film</DialogTitle>
                        </DialogHeader>
                        <FormField
                            control={form.control}
                            name="movie_category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Kategoria filmu</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                            >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="movies" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Video</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="drone" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Dron</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="editing" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Montaż</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="movie_id"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ID filmu</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Np. A6-56miVA_0&" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        ID znajduje się tutaj <br />
                                        https://www.youtube.com/watch?v=<span className="text-yellow-500">A6-56miVA_0&</span>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">
                            Dodaj
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

const UpdateMovie = ({ videos, movieCategory, movieId }: { videos: string[] | null, movieCategory: string, movieId: string }) => {
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const form = useForm({
        defaultValues: {
            new_movie_id: ""
        },
    });

    const onSubmit = async (e: any) => {
        const response = updateMovie(movieCategory, videos, movieId, e.new_movie_id)

        if(response != null) {
            toast.success('Film zaktulizowany!')
        } else {
            toast.error('Błąd aktualizacji filmu. Skontaktuj się z adminem.')
        }
        setOpen(false)
        router.refresh()
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-yellow-500 hover:bg-yellow-600">Zaktualizuj</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <DialogHeader>
                            <DialogTitle>Zaktualizuj film</DialogTitle>
                        </DialogHeader>
                        <DialogDescription>
                            <Image src={thumbnailParser(movieId)} alt={urlParser(movieId)} width={100} height={100}/>
                            {urlParser(movieId)}
                        </DialogDescription>
                        <FormField
                            control={form.control}
                            name="new_movie_id"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>na film o ID:</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Np. B8s33miFR0-7" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        ID znajduje się tutaj <br />
                                        https://www.youtube.com/watch?v=<span className="text-yellow-500">A6-56miVA_0&</span>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">
                            Zaktualizuj
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

const DeleteMovie = ({ videos, movieCategory, movieId }: { videos: string[] | null, movieCategory: string, movieId: string }) => {
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const form = useForm();

    const onSubmit = async (e: any) => {
        const response = deleteMovie(movieCategory, videos, movieId)

        if(response != null) {
            toast.success('Film usunięty')
        } else {
            toast.error('Błąd usuwania filmu. Skontaktuj się z adminem.')
        }
        setOpen(false)
        router.refresh()
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-red-500 hover:bg-red-600">Usuń</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
               <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <DialogHeader>
                            <DialogTitle>Usuń film</DialogTitle>
                        </DialogHeader>
                        <DialogDescription>
                            Film: <span className="text-yellow-600">{movieId}</span>
                        </DialogDescription>
                        <Button type="submit">
                            Usuń
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

const VideoSection = ({ sectionData }: { sectionData: AllMovies }) => {
    const { name, description, videos } = sectionData;
    const router = useRouter();

    const handleReorder = async (movieId: string, direction: 'up' | 'down') => {
        const response = await reorderMovie(name, videos, movieId, direction);

        if (response != null) {
            toast.success('Kolejność filmów zaktualizowana!');
        } else {
            toast.error('Błąd zmiany kolejności. Skontaktuj się z adminem.');
        }
        router.refresh();
    };

    return (
        <div className='flex w-full h-fit border border-cp0-600 max-w-7xl self-center p-4 mb-4'>
            <div className='w-48'>
                <div className="mb-4">{names[name]}</div>
            </div>
            <div className='w-full'>
                <div>{description}</div>
                <div>
                    {videos!.map((video, index) =>
                        <div key={video} className='p-2 flex'>
                            <Image src={thumbnailParser(video)} alt={urlParser(video)} width={200} height={200}/>
                            <div className='p-4 flex justify-between flex-col'>
                                <div>
                                    <div>{urlParser(video)}</div>
                                    <div>Id: <span className="text-cp0-600">{video}</span></div>
                                </div>
                                <div className='gap-4 flex'>
                                    <Button
                                        onClick={() => handleReorder(video, 'up')}
                                        disabled={index === 0}
                                        className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 disabled:cursor-not-allowed"
                                        size="icon"
                                    >
                                        <ChevronUp className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        onClick={() => handleReorder(video, 'down')}
                                        disabled={index === videos!.length - 1}
                                        className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 disabled:cursor-not-allowed"
                                        size="icon"
                                    >
                                        <ChevronDown className="h-4 w-4" />
                                    </Button>
                                    <UpdateMovie videos={videos} movieCategory={name} movieId={video}/>
                                    <DeleteMovie videos={videos} movieCategory={name} movieId={video} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export { VideoSection }
