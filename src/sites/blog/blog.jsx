import React from 'react';
import {Link} from "react-router-dom";



const Blog = ({ blogNotes }) => {

    return (
        <>
            <div className="container mx-auto">
                <div
                    className="">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                        {blogNotes.map((note => (
                            <Link key={note.id} to={`/blog/${note.id}`} state={blogNotes} className="">
                            <button key={note.id} className="p-4 w-full h-full border-black border-2 border-solid rounded mb-1 shadow-lg hover:shadow-2xl" >
                                <div className="relative">
                                    <h1 className="font-['courgette'] text-3xl">{note.title}</h1>
                                    <h3 className="font-black text-sm">{note.created_at}</h3>
                                    <img src={note.image} className="mx-auto hover:brightness-75 transition-opacity" alt="Blog Image"/>
                                    <div className="absolute "></div>
                                </div>

                            </button>
                            </Link>


                                )))}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Blog

