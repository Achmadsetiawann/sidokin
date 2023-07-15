import React, { useState } from 'react'

import InputDocumentComponent from '../InputDocument/InputDocumentComponent';

export default function SidebarComponent({ currentUser }) {

    const [open, setOpen] = useState(false);

  return (

    <div className="flex ">
    <div
        className={` ${
            open ? "w-40" : "w-60 "
        } flex flex-col p-3 bg-gray-800 shadow duration-300`}
    >

        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">
                    Dashboard
                </h2>
                <button onClick={() => setOpen(!open)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </button>
            </div>


            <div className="flex-1">
                <ul className="pt-2 pb-4 space-y-1 text-sm">

                    {/* Home */}
                    <li className="rounded-sm">
                        <a
                            href="#"
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-gray-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            <span className="text-gray-100">Home</span>
                        </a>
                    </li>


                    {/* Input Button */}
                    <li className="rounded-sm">
                        <a
                            href="#"
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-gray-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                />
                            </svg>
                            <span className="text-gray-100">Input Document</span>
                        </a>
                    </li>


                    {/* Logout Button */}
                    <li className="rounded-sm">
                        <a
                            href="#"
                            className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-gray-100"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                />
                            </svg>
                            <span className="text-gray-100">
                                Logout
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    {/* CARD MENU Dashboard */}
    <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
            
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div className="text-sm font-medium text-gray-500 truncate">
                    Review Kegiatan
                </div>
                <div className="mt-1 text-3xl font-semibold text-gray-900">
                    2
                </div>
            </div>
            
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div className="text-sm font-medium text-gray-500 truncate">
                    Upload Kegiatan
                </div>
                <div className="mt-1 text-3xl font-semibold text-gray-900">
                    1
                </div>
            </div>
            
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div className="text-sm font-medium text-gray-500 truncate">
                    Approval Kegiatan
                </div>
                <div className="mt-1 text-3xl font-semibold text-gray-900">
                    2
                </div>
                
            </div>

        </div>

        <div>
            <InputDocumentComponent currentUser={currentUser} />
        </div>

    </div>


</div>

  )
}
