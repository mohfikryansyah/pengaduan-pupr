import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';

export default function Error500() {
  return (
    <div className='bg-slate-900 w-full h-screen flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-[8rem] text-white font-bold'>500</h1>
        <h1 className='text-3xl text-white font-bold mb-10'>Maaf, terjadi kesalahan!</h1>
        <Link href='/' className='hover:text-blue-500 text-white duration-300 bg-transparent hover:bg-white border py-3 px-5 rounded-full font-bold'>
        <ArrowLeft className='w-6 h-6 inline-block mr-2' />
        Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

