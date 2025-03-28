import { Button } from 'flowbite-react';
import React from "react";
import image from '../assets/banner.png';


export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about Tech and My Experience?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources.
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="#" target='_blank' rel='noopener noreferrer'>
                    Go To
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src={image} />
        </div>
    </div>
  )
}