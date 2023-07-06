import React, {useState} from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    return (
        <>
            <div className="container mx-auto">

                <div
                    className="mt-4 pt-16 shadow-lg py-4 px-8 bg-gradient-to-b from from-gray-200 to-gray-100 rounded ring ring-gray-300 ring-offset-2">
                    <h1 className="text-2xl font-bold">Napisz do mnie</h1>
                    <hr className="mx-auto w-64 h-1 my-8 bg-gray-600"></hr>

                    <div className="flex justify-center">
                        <form className="mt-14 w-2/3">

                            <div className="flex flex-col">
                                <div className="flex flex-col align-middle">
                                    <label className="text-left ml-6 mb-4 text-xl font-bold" htmlFor="name">Imię:</label>
                                    <input
                                        className="border-2 border-solid border-gray-500 rounded h-9 p-2 mb-6 ml-6 hover:ring ring-gray-500"
                                        type="text" value={name} onChange={(e) => setName(e.target.value)}
                                        placeholder="Imię"/>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-left ml-6 mb-4 text-xl font-bold" htmlFor="name">Adres
                                        e-mail:</label>
                                    <input
                                        className="border-2 border-solid border-gray-500 rounded h-9 p-2 mb-6 ml-6 hover:ring ring-gray-500"
                                        type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Adres e-mail"/>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-left ml-6 mb-4 text-xl font-bold" htmlFor="name">Temat
                                        wiadomości:</label>
                                    <input
                                        className="border-2 border-solid border-gray-500 rounded h-9 p-2 mb-6 ml-6 hover:ring ring-gray-500"
                                        type="text" value={subject} onChange={(e) => setSubject(e.target.value)}
                                        placeholder="Temat wiadomości"/>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-left ml-6 mb-4 text-xl font-bold" htmlFor="name">Treść
                                        wiadomości:</label>
                                    <textarea
                                        className="border-2 border-solid border-gray-500 rounded h-60 p-2 mb-6 ml-6 hover:ring ring-gray-500"
                                        value={message} onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Treść wiadomości"/>
                                    <input className="mx-auto p-3 w-28 bg-cyan-600 rounded-2xl text-white" type="submit" value="Wyślij" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Contact