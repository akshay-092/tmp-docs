// import React, { useState } from "react";
// import Layout from "@theme/Layout";
// import { ToastProvider, useToasts } from "react-toast-notifications";
// import HomeFooter from "../components/homepage/Footer";
// import axios from "axios";

// export default function FeedbackPage() {
//     return (
//         <ToastProvider>
//             <Layout
//                 title="Feedback"
//                 wrapperClassName="faq-page bg-secondary-1000"
//                 noFooter>
//                 <FeedbackForm />

//                 <HomeFooter className="-mt-20 pb-12 pt-32" />
//             </Layout>
//         </ToastProvider>
//     );
// }

// function FeedbackForm() {
//     const [feedbackEmail, setFeedbackEmail] = useState("");
//     const [feedbackMessage, setFeedbackMessage] = useState("");
//     const { addToast } = useToasts();
//     const submitFeedback = async (email, feedback) => {
//         try {
//             const response = await axios.post(
//                 "https://fiv1-feedback-backend.vercel.app/submit-feedback",
//                 {
//                     email,
//                     feedback,
//                 }
//             );
//             setFeedbackEmail("");
//             setFeedbackMessage("");

//             addToast(response.data.message, {
//                 appearance: "success",
//                 autoDismiss: true,
//             });
//         } catch (error) {
//             addToast("Error submitting feedback: " + error, {
//                 appearance: "error",
//                 autoDismiss: true,
//             });
//         }
//     };
//     return (
//         <section className="noise-bg px-6 py-24">
//             <div className="mx-auto flex max-w-7xl flex-col place-items-center justify-center">
//                 <div className="mb-12 text-2xl font-semibold text-zinc-800 dark:text-zinc-300">
//                     Happy to receive your feedback!
//                 </div>

//                 <div className="relative flex w-full max-w-md items-center text-zinc-700 dark:text-white">
//                     <input
//                         type="email"
//                         className="-ml-5 h-10 flex-1 rounded-md border border-solid border-zinc-200 bg-white px-3 pl-8 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-secondary-1000 dark:text-zinc-200"
//                         placeholder="Email address"
//                         value={feedbackEmail}
//                         onInput={(e) => setFeedbackEmail(e.currentTarget.value)}
//                     />
//                 </div>
//                 <div className="relative mt-6 flex w-full max-w-md items-center text-zinc-700 dark:text-white">
//                     <textarea
//                         rows={5}
//                         type="text"
//                         className="-ml-5  flex-1 rounded-md border border-solid border-zinc-200 bg-white px-3 pl-8 pt-2 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-secondary-1000 dark:text-zinc-200"
//                         placeholder="Your feedback"
//                         value={feedbackMessage}
//                         onInput={(e) => setFeedbackMessage(e.currentTarget.value)}
//                     />
//                 </div>
//                 <div className="relative mt-6 flex w-full max-w-md items-end justify-end text-zinc-700 dark:text-white">
//                     <button
//                         className="dev-portal-signup dev-portal-link cursor-pointer "
//                         disabled={feedbackEmail === "" || feedbackMessage === ""}
//                         onClick={() => submitFeedback(feedbackEmail, feedbackMessage)}>
//                         Send
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// }



import React, { useState } from "react";
import Layout from "@theme/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS
import HomeFooter from "../components/homepage/Footer";
import axios from "axios";

export default function FeedbackPage() {
    return (
        <>
            <Layout
                title="Feedback"
                wrapperClassName="faq-page bg-secondary-1000"
                noFooter>
                <FeedbackForm />
                <HomeFooter className="-mt-20 pb-12 pt-32" />
            </Layout>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}

function FeedbackForm() {
    const [feedbackEmail, setFeedbackEmail] = useState("");
    const [feedbackMessage, setFeedbackMessage] = useState("");

    const submitFeedback = async (email, feedback) => {
        try {
            const response = await axios.post(
                "https://fiv1-feedback-backend.vercel.app/submit-feedback",
                {
                    email,
                    feedback,
                }
            );
            setFeedbackEmail("");
            setFeedbackMessage("");

            toast.success(response.data.message);
        } catch (error) {
            toast.error("Error submitting feedback: " + error);
        }
    };
    return (
        <section className="noise-bg px-6 py-24">
            <div className="mx-auto flex max-w-7xl flex-col place-items-center justify-center">
                <div className="mb-12 text-2xl font-semibold text-zinc-800 dark:text-zinc-300">
                    Happy to receive your feedback!
                </div>

                <div className="relative flex w-full max-w-md items-center text-zinc-700 dark:text-white">
                    <input
                        type="email"
                        className="-ml-5 h-10 flex-1 rounded-md border border-solid border-zinc-200 bg-white px-3 pl-8 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-secondary-1000 dark:text-zinc-200"
                        placeholder="Email address"
                        value={feedbackEmail}
                        onInput={(e) => setFeedbackEmail(e.currentTarget.value)}
                    />
                </div>
                <div className="relative mt-6 flex w-full max-w-md items-center text-zinc-700 dark:text-white">
                    <textarea
                        rows={5}
                        type="text"
                        className="-ml-5  flex-1 rounded-md border border-solid border-zinc-200 bg-white px-3 pl-8 pt-2 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-secondary-1000 dark:text-zinc-200"
                        placeholder="Your feedback"
                        value={feedbackMessage}
                        onInput={(e) => setFeedbackMessage(e.currentTarget.value)}
                    />
                </div>
                <div className="relative mt-6 flex w-full max-w-md items-end justify-end text-zinc-700 dark:text-white">
                    <button
                        className="dev-portal-signup dev-portal-link cursor-pointer "
                        disabled={feedbackEmail === "" || feedbackMessage === ""}
                        onClick={() => submitFeedback(feedbackEmail, feedbackMessage)}>
                        Send
                    </button>
                </div>
            </div>
        </section>
    );
}