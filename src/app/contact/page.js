'use client'


import BackButton from "@/app/components/BackButton";
import {useState} from "react";

export default function contactPage() {

    const [errors, setErrors] = useState([])
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [mailData, setMailData] = useState(null)

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    const sendMail = (e) => {
        const email = e.get("email")
        const subject = e.get("subject")
        const message = e.get("message")

        const data = {
            email,
            subject,
            message
        }

        setLoading(true)

        fetch(`${baseUrl}mail`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer oat_Mg.dUN3UWpMbkx6eDVrVlhxNjd4T3NjSkJFSjd0OGVReDBmOTZSNExOQTM4MDU1MjY5NzY"
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(`Erreur réseau : ${res.status}`);
            }
            return res.json()
        })
        .then(res => {
            setMailData(res.message)
        })
        .catch(err => {
            setErrors(err)
            setLoading(false)
        })
        .finally(() => {
            setLoading(false)
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 5000)
        })

    }


    return (
        <main data-testid="contact-page" className="h-dvh lg:h-screen w-screen grid place-items-center relative">
            <BackButton />
            <form data-testid="contact-form" action={sendMail} className="w-10/12 lg:w-2/3 py-5 px-4 flex flex-col flex-nowrap gap-10 border-8 border-black">
                <h1 className="text-center text-6xl">Contactez moi</h1>

                <input data-testid="email-input" name="email" type="email" placeholder="Email" required className="border-t-2 border-l-2 border-black w-3/4 lg:w-1/2 mx-auto focus:outline-none px-2 caret-black valid:border-emerald-500 user-invalid:border-red-500"/>

                <input data-testid="subject-input" name="subject" type="text" placeholder="Subject" required className="border-x-2 border-black w-3/4 lg:w-1/2 mx-auto focus:outline-none px-2 caret-black valid:border-emerald-500 user-invalid:border-red-500"/>
                <textarea data-testid="message-input" name="message" placeholder="Message" required className="border-b-2 border-r-2 w-3/4 lg:w-1/2 mx-auto focus:outline-none px-2 caret-black valid:border-emerald-500 user-invalid:border-red-500"></textarea>
                {errors.length > 0 && <p className="text-red-500 text-center">{errors[0].message}</p>}
                {success && <p className="text-green-500 text-center">{mailData}</p>}
                {loading && <p className="text-amber-500 text-center">Envoi en cours...</p>}
                <button className="border-b-2 border-r-2 border-black w-3/4 lg:w-1/2 mx-auto hover:border-2 transition-all hover:shadow-sm " type="submit">Submit</button>
            </form>
        </main>
    )
}