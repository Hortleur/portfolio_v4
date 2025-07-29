import Link from "next/link";
import BackButton from "@/app/components/BackButton";

export default function contactPage() {
    return (
        <main data-testid="contact-page" className="h-dvh lg:h-screen w-screen grid place-items-center relative">
            <BackButton />
            <form data-testid="contact-form" action="" className="w-10/12 lg:w-1/3 py-5 px-4 flex flex-col flex-nowrap gap-6 border-8 border-black">
                <h1 className="text-center text-6xl">Contact Me</h1>

                <input data-testid="email-input" type="email" placeholder="Email" required className="border-t-2 border-l-2 border-black w-3/4 lg:w-1/2 mx-auto focus:outline-none px-2 caret-black valid:border-emerald-500 user-invalid:border-red-500"/>

                <input data-testid="subject-input" type="text" placeholder="Subject" required className="border-x-2 border-black w-3/4 lg:w-1/2 mx-auto focus:outline-none px-2 caret-black"/>
                <textarea data-testid="message-input" placeholder="Message" required className="border-b-2 border-r-2 w-3/4 lg:w-1/2 mx-auto focus:outline-none px-2 caret-black"></textarea>
                <button className="border-b-2 border-r-2 border-black w-3/4 lg:w-1/2 mx-auto hover:border-2 transition-all hover:shadow-sm " type="submit">Submit</button>
            </form>
        </main>
    )
}