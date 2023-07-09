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
            const { data: Blog, error} = await supabase
                .from('Blog')
                .select('*')
                .order('id', { ascending: false })

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
                    {blogNotes.map(note =>
                        <li key={note.id}>
                            <h3 className="font-black">{note.created_at}</h3>
                            <h1 className="font-['courgette'] text-3xl">{note.title}</h1>
                            <p className="">{note.description}</p>
                            <ReactPlayer className="mx-auto" url={note.video} controls />
                            </li>)}
                        </div>
                        </div>

                        </>
                        )
                    }

                    export default Blog