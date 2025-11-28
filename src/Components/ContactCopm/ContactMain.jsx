import React from 'react'

const ContactMain = () => {
    return (
        <div className='h-screen w-full bg-black flex flex-col gap-[1.7vw] justify-center items-center'>
            <div className='text-[8vw] font-bold'>
                <h1>Let's Talk</h1>
            </div>
            <div className='h-[10vh] w-[50vw] bg-[#1A1A1A] tracking-widest text-center flex flex-col justify-center'>
                <h3>EMAIL</h3>
                <h3 className=''>shekhar24102004@gmail.com</h3>
            </div>
            <div className='h-[10vh] w-[50vw] bg-[#1A1A1A] tracking-widest text-center flex flex-col justify-center'>
                <h3>PHONE</h3>
                <h3>7289892887</h3>
            </div>
            <div className='flex gap-[1.7vw] tracking-widest'>
                <div className='h-[15vh] w-[15.5vw] bg-[#1A1A1A] flex justify-center items-center'>
                    <h1>instagram</h1>
                </div>
                <div className='h-[15vh] w-[15.5vw] bg-[#1A1A1A] flex justify-center items-center'>
                    <h1>instagram</h1>
                </div>
                <div className='h-[15vh] w-[15.5vw] bg-[#1A1A1A] flex justify-center items-center'>
                    <h1>instagram</h1>
                </div>
            </div>
        </div>
    )
}

export default ContactMain
