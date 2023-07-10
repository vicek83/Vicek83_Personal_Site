import React, {useState, useEffect} from 'react';
import {supabase} from "./supabaseClient.js";
import ReactPlayer from 'react-player';

const Blog = () => {

    const [blogNotes, setBlogNotes] = useState([])

    useEffect(() => {
        getBlog();
    }, [])


    async function getBlog() {
        try {
            const {data: Blog, error} = await supabase
                .from('Blog')
                .select('*')
                .order('id', {ascending: false})
                .limit(3)

            if (error) throw error;
            if (Blog !== null) {
                console.log(Blog);
                setBlogNotes(Blog);

            }
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <>
            <div className="container mx-auto">
                <div
                    className="mt-2 shadow-lg py-4 px-8 bg-gradient-to-b from from-gray-100 to-gray-200 rounded ring ring-gray-300 ring-offset-2">
                    <div className="flex flex-wrap">
                        {blogNotes.map((note => (

                            <div key={note.id} className="w-1/3 p-4 border-black border-2 border-solid rounded mb-3 shadow-lg hover:shadow-2xl">
                                <div className="relative">
                                    <h1 className="font-['courgette'] text-3xl">{note.title}</h1>
                                    <h3 className="font-black text-sm">{note.created_at}</h3>
                                    <p className="">{note.description}</p>
                                    <img src={note.image} className="hover:brightness-75 transition-opacity" alt="Blog Image"/>
                                    <div className="absolute "></div>
                                </div>

                            </div>
                        )))}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Blog