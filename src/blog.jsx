import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";



const Blog = ({ blogNotes }) => {

    return (
        <>
            <div className="container mx-auto">
                <div
                    className="">
                    <div className="flex flex-wrap">
                        {blogNotes.map((note => (
                            <Link key={note.id} to={`/blog/${note.id}`} state={blogNotes} className="w-1/3">
                            <button key={note.id} className="p-4 border-black border-2 border-solid rounded mb-3 shadow-lg hover:shadow-2xl" >
                                <div className="relative">
                                    <h1 className="font-['courgette'] text-3xl">{note.title}</h1>
                                    <h3 className="font-black text-sm">{note.created_at}</h3>
                                    <img src={note.image} className="hover:brightness-75 transition-opacity" alt="Blog Image"/>
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

