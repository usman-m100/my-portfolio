import React from 'react';
import Title from './Title';

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto py-10">
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/e6f991ca-e4bd-48c5-ae9c-93879a9d61f5" method="POST"
                    className="flex flex-col w-full md:w-7/12">

                        <Title>Contact</Title>

                    <input type="text" name="name" placeholder="Name"
                        className='p-2 bg-transparent border-2 rounded-md focus:outline-none' />

                    <input type="text" name="email" placeholder="Email"
                        className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none' />
                    <textarea name="message" placeholder="Message" rows="10" type="text"
                    className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"/>
                    <button type='button' className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-orange-500 drop-shadow-md hover:stroke-white'>
                        Work with me
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;