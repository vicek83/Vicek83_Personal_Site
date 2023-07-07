import React, {useState} from "react";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: ""});
    const [success, setSuccess] = useState(false);
    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [subjectErr, setSubjectErr] = useState(false);
    const [messageErr, setMessageErr] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };
    const onSubmitHandler = (e) => {
        setNameErr(false);
        setEmailErr(false);
        setSubjectErr(false);
        setMessageErr(false);
        setSuccess(false);

        e.preventDefault();
        if (form.name.length < 2) {
            return setNameErr(true);
        } else if (form.email.length < 4) {
            return setEmailErr(true);
        } else if (!form.email.includes('@')) {
            return setEmailErr(true);
        } else if (form.subject.length < 2) {
            return setSubjectErr(true);
        } else if (form.message.length < 2) {
            return setMessageErr(true);
        } else {
            console.log("email to " + form.email);
            setSuccess(true);

        }

    }

    return (
        <>
            <div className="container mx-auto">

                <div
                    className="mt-4 pt-16 shadow-lg py-4 px-8 bg-gradient-to-b from from-gray-200 to-gray-100 rounded ring ring-gray-300 ring-offset-2">
                    <h1 className="text-2xl font-bold">Napisz do mnie</h1>
                    <hr className="mx-auto w-64 h-1 my-8 bg-gray-600"></hr>

                    <div className="flex justify-center">
                        <form onSubmit={onSubmitHandler} className="mt-14 w-2/3">

                            <div className="flex flex-col">
                                <div className="flex flex-col align-middle">
                                    <label className="text-left ml-6 mb-4 text-xl font-bold"
                                           htmlFor="name">Imię:</label>
                                    <input
                                        className="border-2 border-solid border-gray-500 rounded h-9 p-2 mb-6 ml-6 hover:ring ring-gray-500"
                                        type="text" name="name" value={form.name} onChange={handleChange}
                                        placeholder="Imię"/>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-left ml-6 mb-4 text-xl font-bold" htmlFor="name">Adres
                                        e-mail:</label>
                                    <input
                                        className="border-2 border-solid border-gray-500 rounded h-9 p-2 mb-6 ml-6 hover:ring ring-gray-500"
                                        type="email" name="email" value={form.email} onChange={handleChange}
                                        placeholder="Adres e-mail"/>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-left ml-6 mb-4 text-xl font-bold" htmlFor="name">Temat
                                        wiadomości:</label>
                                    <input
                                        className="border-2 border-solid border-gray-500 rounded h-9 p-2 mb-6 ml-6 hover:ring ring-gray-500"
                                        type="text" name="subject" value={form.subject} onChange={handleChange}
                                        placeholder="Temat wiadomości"/>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-left ml-6 mb-4 text-xl font-bold" htmlFor="name">Treść
                                        wiadomości:</label>
                                    <textarea
                                        className="border-2 border-solid border-gray-500 rounded h-60 p-2 mb-6 ml-6 hover:ring ring-gray-500"
                                        value={form.message} name="message" onChange={handleChange}
                                        placeholder="Treść wiadomości"/>

                                    {success && <p className="successMsg text-green-600 font-bold text-xl mb-8">Wiadomość została wysłana!</p>}
                                    {nameErr && <p className="nameErr text-red-500 font-bold text-xl mb-8">Imię jest zbyt krótkie</p>}
                                    {emailErr && <p className="emailErr text-red-500 font-bold text-xl mb-8">Wpisz prawidłowy adres e-mail</p>}
                                    {subjectErr && <p className="subjectErr text-red-500 font-bold text-xl mb-8">Temat wiadomości jest zbyt krótki</p>}
                                    {messageErr && <p className="messageErr text-red-500 font-bold text-xl mb-8">Wiadomość jest zbyt krótka</p>}

                                    <button className="mx-auto p-3 w-28 bg-cyan-600 rounded-2xl text-white"
                                            type="submit">Wyślij
                                    </button>

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