import React, { useState } from 'react'

function Image({ path }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        // if (!isOpen) {
        //     // Prevent scrolling when modal is open
        //     document.body.style.overflow = 'hidden';
        // } else {
        //     // Allow scrolling when modal is closed
        //     document.body.style.overflow = 'auto';
        // }
    };
    
    return (
        <div className="relative">
            <img src={path} alt="Image" className="w-full h-full object-contain cursor-pointer" style={{ width: "300px", maxWidth: "100%", maxHeight: "500px",padding: 15 }}
                onClick={toggleModal} />

            {isOpen && (
                <div id="image-container" style={{ height: "100vh", width: "100vw", zIndex: 1000, background: 'rgba(0,0,0,0.8)', top: 0, left: 0 }} className='fixed flex items-center justify-center' onClick={(e) => {
                    if (e.target.id === 'image-container') {
                        toggleModal();
                    }
                }}>
                    <span className='float-right top-10 right-10 absolute' >
                        <button
                            className="flex items-center justify-center  text-gray-500 mb-2 hover:text-gray-700 cursor-pointer dark:bg-white" style={{ borderRadius: "50%", height: "32px", width: "32px", border: 'none' }}
                            onClick={toggleModal}
                        >
                            <svg
                                // className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </span>
                    <img src={path} alt="Image" className="h-full object-contain  " style={{ maxHeight: "80%", maxWidth: "80%", borderRadius: "10px" }} />
                </div>
            )}

        </div>
    )
}

export default Image;