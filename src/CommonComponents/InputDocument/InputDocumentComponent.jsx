import React,{ useState } from 'react'

import { postStatus, getStatus, updatePost } from "../../API/fireStoreAPI"

import { getCurrentTimeStamp } from '../../Helpers/useMoment';
import { getUniqueID } from '../../Helpers/getUniqueID';
import Datepicker from "react-tailwindcss-datepicker";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function InputDocumentComponent({ currentUser }) {
  
    const [status, setStatus] = useState("");
    const [editInputs, setEditInputs] = useState(currentUser)

    const sendStatus = async () => {
        let object = {
            status: status,
            timeStamp: getCurrentTimeStamp("LLL"),
            userEmail: currentUser.email,
            userName: currentUser.name,
            postID: getUniqueID(),
            userID: currentUser.id,
            postFname: currentUser.first-name,
            postLname: currentUser.last-name,
            // postTglPengajuan: currentUser.tgl-pengajuan,
            // postTglKegiatan: currentUser.tgl-kegiatan,
            postNamePengajuan: currentUser.nama-pengajuan,
            postRAB: currentUser.rab,
            postKdAnggaran: currentUser.kd-anggaran,
            postDTor: currentUser.d-tor,
            postDRab: currentUser.d-rab,
            postDPeserta: currentUser.d-upeserta,
            postDNarsum: currentUser.d-unarsum,
            postDSpk: currentUser.d-spk,
            postDCLHotel: currentUser.d-clhotel,
            postDRundown: currentUser.d-rundown,
        };
        await postStatus(object);
        await setStatus("");
      };
    
    const [valuePengajuan, setValuePengajuan] = useState({ 
        startDate: null  
        });
        
    const [valueKegiatan, setValueKegiatan] = useState({ 
        startDate: null  
        }); 
        
        const handleDatePengajuan = (newValue) => {
        console.log("newValue:", newValue); 
        setValuePengajuan(newValue); 
        }

        const handleDateKegiatan = (newValue) => {
            console.log("newValue:", newValue); 
            setValueKegiatan(newValue); 
        }

  return (
    <div className="isolate bg-white px-2 py-4 sm:py-2 lg:px-2">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>


      <div className="mx-auto mt-6 max-w-xl sm:mt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          
            <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Pelaksana Kegiatan
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>


            <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Judul Kegiatan
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>


            <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Tanggal Pengajuan
                </label>
                <div className="mt-2.5">

                <Datepicker 
                inputClassName = "w-full rounded-md focus:ring-0 bg-green-100 dark:bg-white dark:white:text-black"
                useRange={false} 
                asSingle={true}
                // name="tgl-pengajuan" 
                value={valuePengajuan} 
                onChange={handleDatePengajuan} 
                /> 

                </div>
            </div>


            <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Tanggal Kegiatan
                </label>
                <div className="mt-2.5">
                <Datepicker 
                inputClassName = "w-full rounded-md focus:ring-0 bg-green-100 dark:bg-white dark:white:text-black"
                useRange={false} 
                asSingle={true}
                // name="tgl-kegiatan" 
                value={valueKegiatan} 
                onChange={handleDateKegiatan} 
                /> 

                </div>
            </div>


            <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Nama Pengajuan
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="nama-pengajuan"
                    id="nama-pengajuan"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>


            <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Nominal RAB
                </label>
                <div className="mt-2.5">
                <input
                    type="text"
                    name="rab"
                    id="rab"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>


            <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Kode Anggaran
                </label>
                <div className="mt-2.5">
                <input
                type="text"
                name="kd-anggaran"
                id="kd-anggaran"
                autoComplete="kd-anggaran"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>



            <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">Document</legend>
            
            <div className="mt-6 space-y-6">
              
                <div className="relative flex gap-x-8">
                    <div className="flex h-6 items-center">
                    <input
                        id="tor"
                        name="d-tor"
                        type="checkbox"
                        value="true"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    </div>
                    <div className="text-sm leading-6">
                    <label htmlFor="tor" className="font-medium text-gray-900">
                        TOR
                    </label>
                    </div>

                    <div className="flex h-6 items-center">
                    <input
                        id="rab"
                        name="d-rab"
                        value="true"
                        type="checkbox"
                        className="h-4 w-10 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    </div>
                    <div className="text-sm leading-6">
                    <label htmlFor="rab" className="font-medium text-gray-900">
                        RAB
                    </label>
                    </div>

                    <div className="flex h-6 items-center">
                    <input
                        id="upeserta"
                        name="d-upeserta"
                        value="true"
                        type="checkbox"
                        className="h-4 w-10 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    </div>
                    <div className="text-sm leading-6">
                    <label htmlFor="rab" className="font-medium text-gray-900">
                        Undangan Peserta
                    </label>
                    </div>


                    <div className="flex h-6 items-center">
                    <input
                        id="unarsum"
                        name="d-unarsum"
                        value="true"
                        type="checkbox"
                        className="h-4 w-10 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    </div>
                    <div className="text-sm leading-6">
                    <label htmlFor="rab" className="font-medium text-gray-900">
                        Undangan Narasumber
                    </label>
                    </div>

                </div>
            
            </div>

          </fieldset>


        <div className="sm:col-span-2 border-t border-gray-200">
        <div className="relative flex gap-x-8 mt-8">
            <div className="flex h-6 items-center">
            <input
                id="spk"
                name="d-spk"
                value="true"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            </div>
            <div className="text-sm leading-6">
            <label htmlFor="tor" className="font-medium text-gray-900">
                Surat Perintah Kegiatan
            </label>
            </div>

            <div className="flex h-6 items-center">
            <input
                id="clhotel"
                name="d-clhotel"
                value="true"
                type="checkbox"
                className="h-4 w-10 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            </div>
            <div className="text-sm leading-6">
            <label htmlFor="clhotel" className="font-medium text-gray-900">
                CL Hotel
            </label>
            </div>

            <div className="flex h-6 items-center">
            <input
                id="rundown"
                name="d-rundown"
                value="true"
                type="checkbox"
                className="h-4 w-10 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            </div>
            <div className="text-sm leading-6">
            <label htmlFor="rundown" className="font-medium text-gray-900">
                Rundown
            </label>
            </div>

        </div>
        </div>
          

          
        </div>
        <div className="mt-10">
          <button
            type="button"
            onClick={sendStatus}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Subbmit
          </button>
        </div>
      </div>
    </div>
  )
}
